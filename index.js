// When the user scrolls the page, execute stickyNav
window.onscroll = function () {
	stickyNav();
};

// Get the navbar
const navbar = document.getElementById("navbar");
const content = document.getElementById("content");
// console.log(main);

// Get the offset position of the navbar
const sticky = navbar.offsetTop;
console.log(sticky);

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

const menu = {
	count: 9,
	categories: [
		{
			id: 1,
			name: "mandi",
			count: 3,
			items: [
				{
					name: "1/4 chicken mandi",
					description: "",
					price: 6.5,
					category: "mandi",
				},
				{
					name: "1/2 chicken mandi",
					description: "",
					price: 8.5,
					category: "mandi",
				},
				{
					name: "lamb shank mandi",
					description: "",
					price: 16.5,
					category: "mandi",
				},
			],
		},
		{
			id: 2,
			name: "rice",
			count: 2,
			items: [
				{
					name: "kampong fried rice",
					description: "",
					price: 6.5,
					category: "rice",
				},
				{
					name: "seafood fried rice",
					description: "",
					price: 6.5,
					category: "rice",
				},
			],
		},
		{
			id: 3,
			name: "noodles",
			count: 4,
			items: [
				{
					name: "seafood hor fun",
					description: "",
					price: 7.5,
					category: "noodles",
				},
				{
					name: "beef hor fun",
					description: "",
					price: 8.5,
					category: "noodles",
				},
				{
					name: "laksa johore",
					description: "",
					price: 8.5,
					category: "noodles",
				},
				{
					name: "hokkien mee",
					description: "",
					price: 7.5,
					category: "noodles",
				},
			],
		},
	],
};

// for (category of menu.categories) {
// 	for (item of category.items) {
// 		console.log(item.category, item.name, item.price);
// 	}
// }
