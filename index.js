// When the user scrolls the page, execute myFunction
window.onscroll = function () {
	stickyNav();
};

// Get the navbar
const navbar = document.getElementById("navbar");
const content = document.getElementById("content");
// console.log(main);

// Get the offset position of the navbar
const sticky = navbar.offsetTop;

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

const mandi = [
	{
		item: "1/4 chicken mandi",
		price: 6.5,
	},
	{
		item: "1/2 chicken mandi",
		price: 8.5,
	},
	{
		item: "lamb shank mandi",
		price: 16.5,
	},
];

const rice = [
	{
		item: "kampong fried rice",
		price: 6.5,
	},
	{
		item: "seafood fried rice",
		price: 6.5,
	},
];

const noodles = [
	{
		item: "seafood hor fun",
		price: 7.5,
	},
	{
		item: "beef hor fun",
		price: 8.5,
	},
	{
		item: "laksa johore",
		price: 8.5,
	},
	{
		item: "hokkien mee",
		price: 7.5,
	},
];

const menu = [mandi, rice, noodles];

const menu = {
	mandi: [
		{
			item: "1/4 chicken mandi",
			price: 6.5,
		},
		{
			item: "1/2 chicken mandi",
			price: 8.5,
		},
		{
			item: "lamb shank mandi",
			price: 16.5,
		},
	],
	rice: [
		{
			item: "kampong fried rice",
			price: 6.5,
		},
		{
			item: "seafood fried rice",
			price: 6.5,
		},
	],
	noodles: [
		{
			item: "seafood hor fun",
			price: 7.5,
		},
		{
			item: "beef hor fun",
			price: 8.5,
		},
		{
			item: "laksa johore",
			price: 8.5,
		},
		{
			item: "hokkien mee",
			price: 7.5,
		},
	],
};
