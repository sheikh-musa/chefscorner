const navbar = document.getElementById("navbar");
const content = document.getElementsByClassName("content")[0];
const sticky = navbar.offsetTop;
const modal = document.getElementById("item-modal");
const cartModal = document.getElementById("cart-modal");
const closeBtn = document.getElementsByClassName("close")[0];
const closeCartBtn = document.getElementsByClassName("cartClose")[0];
const menuItem = document.getElementsByClassName("menu-item");
const addToCartBtn = document.getElementById("addToCart");
const modalVariations = document.getElementsByClassName(
	"modal-item-variations"
)[0];
const cartBtn = document.getElementsByClassName("cart-icon")[0];
const cartContent = document.getElementsByClassName("cart-items")[0];
const checkoutBtn = document.getElementsByClassName("checkout-button")[0];
const updateBtn = document.getElementsByClassName("update-cart")[0];
const addQuantity = document.getElementById("addQuantity");
const cartCounter = document.getElementsByClassName("cart-count")[0];
const increaseBtn = document.getElementsByClassName("increase")[0];
const decreaseBtn = document.getElementsByClassName("decrease")[0];
const increaseCartBtn = document.getElementsByClassName("increaseCart");
const decreaseCartBtn = document.getElementsByClassName("decreaseCart");

// Mock database
const menu = {
	categories: [
		{
			name: "Noodles",
			items: [
				{
					id: 0,
					name: "Chezzy Noodles",
					description: "",
					price: 4.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 1,
					name: "Fried Egg Mee",
					description: "",
					price: 4.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 2,
					name: "Hong Kong Mee",
					description: "",
					price: 5.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 3,
					name: "Laksa Johore",
					description: "",
					price: 6.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 4,
					name: "Seafood Hor Fun",
					description: "",
					price: 6.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 5,
					name: "Beef Hor Fun",
					description: "",
					price: 8.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 6,
					name: "Hokkien Mee",
					description: "",
					price: 7.5,
					category: "Noodles",
					images: { thumbnail: "", full: "" },
				},
			],
		},
		{
			name: "Rice",
			items: [
				{
					id: 7,
					name: "Kampong Fried Rice",
					description: "",
					price: 5.5,
					category: "Rice",
					images: { thumbnail: "", full: "" },
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
				{
					id: 8,
					name: "Salted Fish Fried Rice",
					description: "",
					price: 6,
					category: "Rice",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 9,
					name: "Seafood Fried Rice",
					description: "",
					price: 7.5,
					category: "Rice",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 10,
					name: "Beef Fried Rice",
					description: "",
					price: 8,
					category: "Rice",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 11,
					name: "Mutton Fried Rice",
					description: "",
					price: 8.5,
					category: "Rice",
					images: { thumbnail: "", full: "" },
				},
			],
		},
		{
			name: "Mandhi Rice",
			items: [
				{
					id: 12,
					name: "1/4 Roasted Chicken",
					description:
						"Honey chicken and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 7.5,
					category: "Mandhi Rice",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 13,
					name: "1/2 Roasted Chicken",
					description:
						"Honey chicken and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 9.5,
					category: "Mandhi Rice",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 14,
					name: "Mutton",
					description:
						"Mutton and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 9.5,
					category: "Mandhi Rice",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 15,
					name: "Lamb Shank",
					description:
						"Lamb shank and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 16.5,
					category: "Mandhi Rice",
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
			name: "Mandhi Rice Platter",
			items: [
				{
					id: 16,
					name: "Whole Roasted Chicken",
					description:
						"Honey chicken and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 25,
					category: "Mandhi Rice Platter",
					images: { thumbnail: "", full: "" },
					variations: [
						{
							name: "Size",
							optional: "Required",
							items: [
								{ name: "1 Chicken", price: 0 },
								{ name: "2 Chicken", price: 5 },
							],
						},
					],
				},
				{
					id: 17,
					name: "Chicken and Mutton",
					description:
						"Honey chicken, mutton and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 36,
					category: "Mandhi Rice Platter",
					images: { thumbnail: "", full: "" },
					variations: [
						{
							name: "Size",
							optional: "Required",
							items: [
								{ name: "Regular", price: 0 },
								{ name: "Large", price: 19 },
							],
						},
					],
				},
				{
					id: 18,
					name: "Mutton and Lamb Shank",
					description:
						"Mutton, lamb shank and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 45,
					category: "Mandhi Rice Platter",
					images: { thumbnail: "", full: "" },
					variations: [
						{
							name: "Size",
							optional: "Required",
							items: [
								{ name: "Regular", price: 0 },
								{ name: "Large", price: 15 },
							],
						},
					],
				},
				{
					id: 19,
					name: "Special",
					description:
						"Chicken, mutton, lamb shank and basmati rice with a special blend of spices. Served with mutton soup and salad. Traditional dish originating from Hadhramaut, Yemen.",
					price: 55,
					category: "Mandhi Rice Platter",
					images: {
						thumbnail: "lamb_shank_thumbnail.jpg",
						full: "lamb_shank_full.jpg",
					},
					variations: [
						{
							name: "Size",
							optional: "Required",
							items: [
								{ name: "Regular", price: 0 },
								{ name: "Large", price: 10 },
							],
						},
					],
				},
			],
		},
		{
			name: "Soups",
			items: [
				{
					id: 20,
					name: "Mushroom Soup",
					description: "",
					price: 6.5,
					category: "Soups",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 21,
					name: "Sliced Fish Soup",
					description: "",
					price: 6.5,
					category: "Soups",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 22,
					name: "Arabic Mutton Soup",
					description: "",
					price: 6.5,
					category: "Soups",
					images: { thumbnail: "", full: "" },
					variations: [
						{
							name: "Size",
							optional: "Required",
							items: [
								{ name: "Regular", price: 0 },
								{ name: "Large", price: 2 },
							],
						},
					],
				},
			],
		},
		{
			name: "Vegetables",
			items: [
				{
					id: 23,
					name: "Chap Chai",
					description: "",
					price: 6,
					category: "Vegetables",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 24,
					name: "Kailan Garlic",
					description: "",
					price: 6,
					category: "Vegetables",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 25,
					name: "Kang Kong Sambal",
					description: "",
					price: 6,
					category: "Vegetables",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 26,
					name: "Bak Choi",
					description: "",
					price: 6,
					category: "Vegetables",
					images: { thumbnail: "", full: "" },
				},
			],
		},
		{
			name: "Eggs",
			items: [
				{
					id: 27,
					name: "Fried Omelete",
					description: "",
					price: 4,
					category: "Eggs",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 28,
					name: "Mushroom Omelete",
					description: "",
					price: 6,
					category: "Eggs",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 29,
					name: "Prawn Omelete",
					description: "",
					price: 8,
					category: "Eggs",
					images: { thumbnail: "", full: "" },
				},
			],
		},
		{
			name: "Seafood",
			items: [
				{
					id: 30,
					name: "Tiger Prawn",
					description: "Per piece",
					price: 4,
					category: "Seafood",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 31,
					name: "Salted Egg Calamari",
					description: "",
					price: 8.5,
					category: "Seafood",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 32,
					name: "Pomfret",
					description: "",
					price: 14,
					category: "Seafood",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 33,
					name: "Siakap",
					description: "",
					price: 16,
					category: "Seafood",
					images: { thumbnail: "", full: "" },
				},
				{
					id: 34,
					name: "Cockles",
					description: "",
					price: 6,
					category: "Seafood",
					images: { thumbnail: "", full: "" },

					variations: [
						{
							name: "Size",
							optional: "Required",
							items: [
								{ name: "Regular", price: 0 },
								{ name: "Large", price: 2 },
							],
						},
					],
				},
			],
		},
	],
};

// Add sticky class to navbar when scroll position reached, remove when scroll position left
window.onscroll = () => {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		content.classList.add("sticky-content");
	} else {
		navbar.classList.remove("sticky");
		content.classList.remove("sticky-content");
	}
};

// Adds active class to clicked link - possible refactor to toggle function?
let current = "noodlesLink";
navbar.addEventListener("click", function (e) {
	if (!e.target.classList.contains("active")) {
		e.target.classList.add("active");
		document.getElementById(`${current}`).classList.remove("active");
		current = e.target.id;
	}
});

// Dynamically populate menu items into DOM
let html = ``;
let categoryStr = "";
for (category of menu.categories) {
	//skips repeated category names
	if (categoryStr != category.name) {
		//for single page navigation with #categoryName
		html += `<div id="${category.name
			.toLowerCase()
			.split(" ")
			.join("-")}" class="menu-item-category">${category.name}</div>`;
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

// Listen for click event on each item, then displays and populate modal
for (let i = 0; i < menuItem.length; i++) {
	menuItem[i].addEventListener("click", function (e) {
		{
			modal.style.display = "block";
			let clickedId = menuItem[i].id;
			populateModal(clickedId);
		}
	});
}

// Closes item modal
closeBtn.onclick = () => {
	clearModal(modal);
};
// Closes cart modal
closeCartBtn.onclick = () => {
	clearModal(cartModal);
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
	//item modal
	if (event.target == modal) {
		clearModal(modal);
	}
	//cart modal
	if (event.target == cartModal) {
		clearModal(cartModal);
	}
};

function clearModal(modalInput) {
	if (modalInput == modal) {
		modal.style.display = "none";
		addQuantity.innerText = 1;
	} else {
		cartModal.style.display = "none";
		addQuantity.innerText = 1;
	}
	return;
}

// Dynamically populate item variations into modal
let cartItemId = "";
let cartItem = "";
let cartPrice = "";
function populateModal(id) {
	let html = ``;
	for (category of menu.categories) {
		for (item of category.items) {
			if (item.id == id) {
				cartItemId = item.id;
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
									<input type="radio" checked="checked" id="${varItem.name}" value="${varItem.price}" name="reqVar"><label for="${varItem.name}">${varItem.name}</label><br>
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
	modalVariations.innerHTML = html;
}

let cart = [];
addToCartBtn.addEventListener("click", function (e) {
	//prevent page refresh
	e.preventDefault();
	cart = addToCart();
	addQuantity.innerText = 1;
	modal.style.display = "none";
});

let cartCountTotal = 0;
function addToCart() {
	let item = {
		id: cartItemId,
		name: cartItem,
		basePrice: cartPrice,
		itemQuantity: parseInt(addQuantity.innerText),
		variations: [],
	};
	//iterate through checkboxes and radios
	let checksAndRadios = document.querySelectorAll("input");
	for (input of checksAndRadios) {
		if (input.type == "checkbox" && input.checked) {
			//add selected optional variation into array
			item.variations.push({ name: input.id, price: input.value });
			console.log("optional variation added");
		}
		if (input.type == "radio" && input.checked) {
			//add selected required variation into array
			item.variations.push({ name: input.id, price: input.value });
			console.log("required variation added");
		}
	}

	//if item has variations, get variation total price and item total price
	if (item.variations.length > 0) {
		let varTotal = 0;
		for (variationItem of item.variations) {
			varTotal += Number(variationItem.price);
			item.varTotal = varTotal;
			// console.log("log3", item.varTotal);
		}
		item.totalPrice = (item.basePrice + item.varTotal) * item.itemQuantity;
		// cart.push(item);
		pushToCart(item, true);

		// console.log(JSON.stringify(item));
	}
	//no variations
	else {
		item.totalPrice = item.basePrice * item.itemQuantity;
		// cart.push(item);
		pushToCart(item, false);
	}

	// checks if exact item is already in cart, then increase quantity of said item
	function pushToCart(item, variation) {
		if (cart.length == 0) {
			cart.push(item);
			cartCountTotal += item.itemQuantity;
			console.log("cart empty, item pushed", item.name);
		} else {
			let duplicate = false;
			for (cartItem of cart) {
				if (
					(!variation && item.name == cartItem.name) ||
					(variation &&
						JSON.stringify(item.variations) == JSON.stringify(cartItem.variations))
				) {
					duplicate = true;
					console.log("duplicate found", duplicate);
					cartItem.itemQuantity += item.itemQuantity;
					console.log(cartCountTotal, item.itemQuantity);
					cartCountTotal += item.itemQuantity;
					cartItem.totalPrice += item.totalPrice;
				}
			}
			if (!duplicate) {
				cart.push(item);
				cartCountTotal += item.itemQuantity;
				console.log("no duplicates found, item pushed", item.name);
			}
		}
	}
	cartBtn.style.display = "block";
	cartCounter.innerText = cartCountTotal;
	return cart;
}

cartBtn.addEventListener("click", () => {
	// console.log("cart");
	cartModal.style.display = "block";
	populateCart(cart);
});

function populateCart(cart) {
	let cartTotal = 0;
	let html = `<div><h2>Cart</h2></div>`;
	try {
		for (item of cart) {
			// console.log(item.name, item.variations, item.totalPrice);
			html += `
			<div class="cart-item">
				<div class="cart-item-name">${item.name}</div>
				<div class="cart-item-quantity-and-price">
					<div class="cart-item-quantity">
						<div class="quantity-control">
							<span id="increase${item.id}" class="increaseCart">+</span>
							<span id="quantity${item.id}">${item.itemQuantity}</span>
							<span id="decrease${item.id}" class="decreaseCart">-</span>
						</div>
					</div>
					<div class="cart-item-price">${item.basePrice}</div>
				</div>
			</div>`;
			if (item.variations) {
				for (variation of item.variations) {
					html += `
					<div class="cart-variation">
						<div class="cart-variation-name">- ${variation.name}</div>
						<div class="cart-variation-price">${variation.price}</div>
					</div>`;
				}
				html += `
			<div class="cart-item-total">
				<div class="cart-item-total-title">Item Total:</div>
				<div id ="itemTotal${item.id}" class="cart-item-total-price">${item.totalPrice}</div>
			</div>
			<hr>`;
			}

			cartTotal += item.totalPrice;
		}
		html += `
			<div class="cart-grand-total">
				<div class="cart-grand-total-title">Grand Total:</div>
				<div class="cart-grand-total-price">${cartTotal}</div>
			</div>
			<hr>`;
		checkoutBtn.style.display = "block";
	} catch {
		//if cart empty
		html = `
		<div><h2>Cart</h2></div>
		<div><p>Cart empty</p></div>`;
	}
	cartContent.innerHTML = html;
	for (let i = 0; i < cart.length; i++) {
		increaseCartBtn[i].addEventListener("click", function (e) {
			{
				let clickedId = increaseCartBtn[i].id;
				increaseItem(clickedId);
			}
		});
	}

	for (let i = 0; i < cart.length; i++) {
		decreaseCartBtn[i].addEventListener("click", function (e) {
			{
				let clickedId = decreaseCartBtn[i].id;
				decreaseItem(clickedId);
			}
		});
	}

	function increaseItem(id) {
		let parsedId = Number(id.slice(8));
		// console.log(cart);
		for (item of cart) {
			if (item.id == parsedId) {
				item.itemQuantity++;
				document.getElementById(`quantity${item.id}`).innerText++;
				item.totalPrice += item.basePrice;
				if (item.variations.length > 0) {
					console.log(item.variations.varTotal);
					item.totalPrice += item.varTotal;
					cartTotal += item.varTotal;
				}
				document.getElementById(`itemTotal${item.id}`).innerText = item.totalPrice;
				cartTotal += item.basePrice;
				document.getElementsByClassName("cart-grand-total-price")[0].innerText =
					cartTotal;
				cartCountTotal++;
				cartCounter.innerText = cartCountTotal;
			}
		}
	}

	function decreaseItem(id) {
		let parsedId = Number(id.slice(8));
		console.log(cart);
		for (item of cart) {
			if (item.id == parsedId && item.itemQuantity > 1) {
				item.itemQuantity--;
				document.getElementById(`quantity${item.id}`).innerText--;
				item.totalPrice -= item.basePrice;
				if (item.variations.length > 0) {
					item.totalPrice -= item.varTotal;
					cartTotal -= item.varTotal;
				}
				document.getElementById(`itemTotal${item.id}`).innerText = item.totalPrice;
				cartTotal -= item.basePrice;
				document.getElementsByClassName("cart-grand-total-price")[0].innerText =
					cartTotal;
				cartCountTotal--;
				cartCounter.innerText = cartCountTotal;
			} else if (item.id == parsedId && item.itemQuantity == 1) {
				console.log("delete item");
				console.log(cart);
				for (let i = 0; i < cart.length; i++) {
					if (cart[i].id === item.id) {
						console.log("item found!");
						cart.splice(i, 1);
						cartCountTotal--;
						cartCounter.innerText = cartCountTotal;
						if (cartCountTotal == 0) {
							cartBtn.style.display = "none";
						}
					}
				}
			}
		}
		populateCart(cart);
	}
}

checkoutBtn.addEventListener("click", () => {
	processOrder(cart);
});

function processOrder(cart) {
	console.log(cart);
}

increaseBtn.onclick = () => {
	addQuantity.innerText++;
};

decreaseBtn.onclick = () => {
	if (addQuantity.innerText > 1) {
		addQuantity.innerText--;
	}
};
