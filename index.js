const navbar = document.getElementById("navbar");
const content = document.getElementsByClassName("content")[0];

// When the user scrolls the page, execute stickyNav
window.onscroll = function () {
	stickyNav();
};

// Get the offset position of the navbar
const sticky = navbar.offsetTop;
// console.log(sticky);

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyNav() {
	if (window.pageYOffset >= sticky) {
		navbar.classList.add("sticky");
		content.classList.add("sticky-content");
	} else {
		navbar.classList.remove("sticky");
		content.classList.remove("sticky-content");
	}
}

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
				<div class="menu-item-left-column">
					<div class="menu-item-top">
						<div class="menu-item-title">${item.name}</div>
						<div class="menu-item-price">${item.price}</div>
					</div>
					<div class="menu-item-bottom">
						<div class="menu-item-description">${item.description}</div>
					</div>
				</div>
				<div class="menu-item-right-column"><img class="menu-item-img" src="${item.image}"></div>
			</div>`;
	}
}
content.innerHTML = html;
