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

const menu = {
	count: 9,
	categories: [
		{
			id: 1,
			name: "Mandi",
			count: 2,
			items: [
				{
					name: "1/4 Chicken Mandi",
					description:
						"Honey chicken and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 6.5,
					category: "Mandi",
					image: "",
				},
				{
					name: "Lamb Shank Mandi",
					description:
						"Lamb shank and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 16.5,
					category: "Mandi",
					image: "lamb_shank_mandi.jpg",
				},
			],
		},
		{
			id: 2,
			name: "Rice",
			count: 2,
			items: [
				{
					name: "Kampong Fried Rice",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 6.5,
					category: "Rice",
					image: "",
				},
				{
					name: "Seafood Fried Rice",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 6.5,
					category: "Rice",
					image: "",
				},
			],
		},
		{
			id: 3,
			name: "Noodles",
			count: 4,
			items: [
				{
					name: "Seafood Hor Fun",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 7.5,
					category: "Noodles",
					image: "",
				},
				{
					name: "Beef Hor Fun",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 8.5,
					category: "Noodles",
					image: "",
				},
				{
					name: "Laksa Johore",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 8.5,
					category: "Noodles",
					image: "",
				},
				{
					name: "Hokkien Mee",
					description:
						"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis rhoncus leo a mi cursus gravida.",
					price: 7.5,
					category: "Noodles",
					image: "",
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
		html += `<div class="menu-item">
					<div class="menu-item-top">
						<div class="menu-item-title">${item.name}</div>
						<div class="menu-item-price">$${item.price}</div>
					</div>
					<div class="menu-item-bottom">
						<div class="menu-item-description">${item.description}</div>
						<div class="menu-item-image"><img class="item-img" src="${item.image}"></div>
					</div>
			</div>`;
	}
}
content.innerHTML = html;

//modal stuff
const modal = document.getElementById("item-modal");
const closeBtn = document.getElementsByClassName("close")[0];

//necessary to check for all these? why doesnt .contains("menu-item") work?
content.addEventListener("click", function (e) {
	if (
		e.target.classList.contains("menu-item-title") ||
		e.target.classList.contains("menu-item-price") ||
		e.target.classList.contains("menu-item-image") ||
		e.target.classList.contains("menu-item-description") ||
		e.target.classList.contains("menu-item-top") ||
		e.target.classList.contains("menu-item-bottom") ||
		e.target.classList.contains("item-img")
	) {
		modal.style.display = "block";
		console.log(e.target.parentElement.parentElement);
	}
});

closeBtn.onclick = () => {
	modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
};
