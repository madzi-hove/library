// buttone containers
const buttonContainer = document.querySelector(".button__container");
const secondaryBtn = document.querySelector(".secondary-btn");
// buttons
const newBtn = document.querySelector("#new-book-btn");
const addBtn = document.querySelector("#add-book-btn");
const cancelBtn = document.querySelector("#cancel-btn");
// form
const form = document.querySelector("form");
const fieldset = document.querySelector("fieldset");
// inputs
const title = document.querySelector("#title");
const author = document.querySelector("#author");
const pages = document.querySelector("#pages");
const read = document.querySelector("#read");
// table
const table = document.querySelector(".table");

let myLibrary = [
	{
		title: "Excession",
		author: "Ian M. Banks",
		pages: 451,
		read: "Yes",
	},
	{
		title: "The Colour of Magic",
		author: "Terry Pratchett",
		pages: 240,
		read: "Yes",
	},
	{
		title: "Gardens of the Moon",
		author: "Steven Erikson",
		pages: 491,
		read: "Yes",
	},
];

function Books(title, author, pages, read) {
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = read;
}

Books.prototype.report = function () {
	return `The ${this.book} by ${this.author}, ${this.pages}, ${this.read}`;
};

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Books(title, author, pages, read));
}

console.log(myLibrary);

function buttonOperations(target) {
	if (target.id === newBtn.id) {
		form.classList.remove("closed");
		form.classList.add("expand");
		fieldset.removeAttribute("hidden");
		secondaryBtn.removeAttribute("hidden");
		newBtn.setAttribute("hidden", "hidden");
	}
	if (target.id === cancelBtn.id) {
		form.classList.remove("expand");
		form.classList.add("closed");
		fieldset.setAttribute("hidden", "hidden");
		secondaryBtn.setAttribute("hidden", "hidden");
		newBtn.removeAttribute("hidden");
	}
	if (target.id === addBtn.id) {
		const bookRead = read.checked ? "Yes" : "No";
		addBookToLibrary(title.value, author.value, pages.value, bookRead);
	}
}

buttonContainer.addEventListener("click", (e) => buttonOperations(e.target));
