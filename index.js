const navbar = document.getElementById("navbar");
const content = document.getElementsByClassName("content")[0];

// When the user scrolls the page, execute stickyNav
window.onscroll = function () {
	stickyNav();
};

// Get the offset position of the navbar
const sticky = navbar.offsetTop;
// console.log(sticky);

// Add sticky class to navbar when scroll position reached. Remove sticky when scroll position left
function stickyNav() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		content.classList.add("sticky-content");
	} else {
		navbar.classList.remove("sticky");
		content.classList.remove("sticky-content");
	}
}

//Adds active class to clicked link
//possible refactor to toggle function
let current = "mandiLink";
navbar.addEventListener("click", function (e) {
	if (!e.target.classList.contains("active")) {
		e.target.classList.add("active");
		document.getElementById(`${current}`).classList.remove("active");
		current = e.target.id;
	}
});

//mock database
const menu = {
	categories: [
		{
			name: "Mandi",
			items: [
				{
					id: 0,
					name: "1/4 Chicken Mandi",
					description:
						"Honey chicken and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 6.5,
					category: "Mandi",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 1,
					name: "Lamb Shank Mandi",
					description:
						"Lamb shank and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 16.5,
					category: "Mandi",
					images: {
						thumbnail: "lamb_shank_thumbnail.jpg",
						full: "lamb_shank_full.jpg",
					},
					variations: [
						{
							name: "Additional Meat",
							optional: "Optional",
							items: [
								{ name: "Beef", price: 4 },
								{ name: "Mutton", price: 6 },
								{ name: "Lamb Shank", price: 8 },
							],
						},
						{
							name: "Chilli",
							optional: "Required",
							items: [
								{ name: "No Chilli", price: 0 },
								{ name: "Regular Chilli", price: 0 },
								{ name: "Extra Chilli", price: 0 },
							],
						},
					],
				},
			],
		},
		{
			name: "Rice",
			items: [
				{
					id: 2,
					name: "Kampong Fried Rice",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 6.5,
					category: "Rice",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 3,
					name: "Seafood Fried Rice",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 6.5,
					category: "Rice",
					images: { thumbnail: "", full: "" },
				},
			],
		},
		{
			name: "Noodles",
			items: [
				{
					id: 4,
					name: "Seafood Hor Fun",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 7.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 5,
					name: "Beef Hor Fun",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 8.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 6,
					name: "Laksa Johore",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 8.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 7,
					name: "Hokkien Mee",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 7.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
			],
		},
	],
};

//Dynamically populate menu items into DOM
let html = ``;
let categoryStr = "";
for (category of menu.categories) {
	if (categoryStr != category.name) {
		html += `<div id="${category.name.toLowerCase()}" class="menu-item-category">${
			category.name
		}</div>`;
		categoryStr = category.name;
	}
	for (item of category.items) {
		html += `<div id="${item.id}" class="menu-item">
					<div class="menu-item-top">
						<div class="menu-item-title">${item.name}</div>
						<div class="menu-item-price">$${item.price}</div>
					</div>
					<div class="menu-item-bottom">
						<div class="menu-item-description">${item.description}</div>
						<div class="menu-item-image"><img class="item-img" src="${item.images.thumbnail}"></div>
					</div>
			</div>`;
	}
}
content.innerHTML = html;

//modal stuff
const modal = document.getElementById("item-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const menuItem = document.getElementsByClassName("menu-item");

//get item info when clicked
for (let i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener("click", function (e) {
		{
			modal.style.display = "block";
			let clickedId = menuItem[i].id;
			populateModal(clickedId);
		}
	});
}

closeBtn.onclick = () => {
	modal.style.display = "none";
	resetQuantity();
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
		resetQuantity();
	}
};

function resetQuantity() {
	quantity.value = 1;
	quantity.textContent = 1;
}

//Dynamically populate item variations into modal
let cartItem;
let cartPrice;
function populateModal(id) {
	let html = ``;
	for (category of menu.categories) {
		for (item of category.items) {
			if (item.id == id) {
				cartItem = item.name;
				cartPrice = item.price;
				html += `
				<div class="modal-image">
					<img class="modal-img" src="${item.images.full}">
				</div>
				<div class="menu-item-top">
					<div class="menu-item-title modal-item-title">${item.name}</div>
					<div class="menu-item-price modal-item-price">$${item.price}</div>
				</div>
				<div class="menu-item-bottom">
					<div class="">${item.description}</div>
				</div>`;
				if (item.variations) {
					for (variation of item.variations) {
						html += `<hr>
						<div class="modal-variation-top">
							<div class="modal-variation-name">${variation.name}</div>
							<div class="modal-variation-optional">${variation.optional}</div>
						</div>
						`;
						for (varItem of variation.items) {
							html += `<div class="modal-variation-options">`;
							if (variation.optional == "Required") {
								html += `
								<div class="modal-variation-options-name">
									<input type="radio" id="${varItem.name}" value="${varItem.price}" name="reqVar"><label for="${varItem.name}">${varItem.name}</label><br>
								</div>
								<div class="modal-variation-options-price">$${varItem.price}<br></div>
								`;
							} else {
								html += `
								<div class="modal-variation-options-name">
									<input type="checkbox" id="${varItem.name}" value="${varItem.price}"><label for="${varItem.name}">${varItem.name}</label><br>
								</div>
								<div class="modal-variation-options-price">$${varItem.price}<br></div>
								`;
							}
							html += `</div>`;
						}
					}
				}
			}
		}
	}
	const modalVariations = document.getElementsByClassName(
		"modal-item-variations"
	)[0];
	modalVariations.innerHTML = html;
}

const addToCartBtn = document.getElementById("addToCart");
addToCartBtn.value = "Add";

addToCartBtn.addEventListener("click", function (e) {
	e.preventDefault();
	addToCart();
});
const quantity = document.getElementById("quantity");
function addToCart() {
	let cart = {};
	console.log(cartItem, cartPrice, quantity.value);

	for (input of document.querySelectorAll("input")) {
		// console.log(input);
		if ((input.type == "checkbox" || input.type == "radio") && input.checked) {
			console.log(input.id, input.value);
		}
	}
}
