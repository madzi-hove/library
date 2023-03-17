const main = document.querySelector("main");
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
const table = document.querySelector("table");
const tableBody = document.querySelector("tbody");

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

function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Books(title, author, pages, read));
}

function showForm() {
	form.classList.remove("closed");
	form.classList.add("expand");
	fieldset.removeAttribute("hidden");
	secondaryBtn.removeAttribute("hidden");
	newBtn.setAttribute("hidden", "hidden");
}

function hideForm() {
	form.classList.remove("expand");
	form.classList.add("closed");
	fieldset.setAttribute("hidden", "hidden");
	secondaryBtn.setAttribute("hidden", "hidden");
	newBtn.removeAttribute("hidden");
}

function buttonOperations(target) {
	if (target.id === newBtn.id) {
		showForm();
	}
	if (target.id === cancelBtn.id) {
		hideForm();
	}
	if (target.id === addBtn.id) {
		const bookRead = read.checked ? "Yes" : "No";
		addBookToLibrary(title.value, author.value, pages.value, bookRead);
	} else console.log(target.dataset.indexNumber);
}

function displayBooks() {
	myLibrary.forEach((book, i) => {
		const html = `<tr class="row">
						<td class="number row-data" scope="row">${i + 1}</td>
						<td class="title row-data" scope="row">${book.title}</td>
						<td class="author row-data" scope="row">${book.author}</td>
						<td class="pages row-data" scope="row">${book.pages}</td>
						<td class="read row-data" scope="row">${book.read}</td>
						<td class="delete" scope="row"><button class="delete-btn"><span class="material-symbols-outlined" data-index-number="${i}">delete
						</span></button></td>
					</tr>`;

		tableBody.insertAdjacentHTML("beforeend", html);
	});
}

function addBookToTable(event) {
	event.preventDefault();
	displayBooks();
}

window.addEventListener("load", () => {
	displayBooks();
	main.addEventListener("click", (e) => buttonOperations(e.target));

	form.addEventListener("submit", (e) => addBookToTable(e));
});
