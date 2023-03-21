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
const titleInput = document.querySelector("#title");
const authorInput = document.querySelector("#author");
const pagesInput = document.querySelector("#pages");
const readInput = document.querySelector("#read");
// table
const table = document.querySelector("table");
const tableBody = document.querySelector("tbody");
let myLibrary = [];
let exampleData = [
	{
		title: "Excession",
		author: "Ian M. Banks",
		pages: 451,
		read: { checked: true },
	},
	{
		title: "The Colour of Magic",
		author: "Terry Pratchett",
		pages: 240,
		read: { checked: true },
	},
	{
		title: "Gardens of the Moon",
		author: "Steven Erikson",
		pages: 491,
		read: { checked: true },
	},
];

function exampleBooks() {
	exampleData.forEach((book) => {
		addBookToLibrary(book.title, book.author, book.pages, book.read);
	});
}

// constructor
function Book(title, author, pages, read) {
	const bookRead = read.checked ? "Yes" : "No";
	this.title = title;
	this.author = author;
	this.pages = pages;
	this.read = bookRead;
}

Book.prototype.changeReadStatus = function () {
	this.read = this.read === "Yes" ? "No" : "Yes";
	displayTable();
};

// app interface
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
		addBookToLibrary(
			titleInput.value,
			authorInput.value,
			pagesInput.value,
			readInput.value
		);
	}
	if (target.classList.contains("delete")) {
		myLibrary.splice(+target.dataset.indexNumber, 1);
		tableBody.querySelectorAll("tr").forEach((child) => {
			child.remove();
		});
		displayTable();
	}

	if (target.classList.contains("toggle-btn")) {
		myLibrary[target.dataset.indexNumber].changeReadStatus();
	}
}
// library operation
function addBookToLibrary(title, author, pages, read) {
	myLibrary.push(new Book(title, author, pages, read));
}

function addBookToTable(event) {
	event.preventDefault();
	displayTable();
}

function displayTable() {
	tableBody.querySelectorAll("tr").forEach((child) => {
		child.remove();
	});
	myLibrary.forEach((book, i) => {
		const html = `<tr class="row">
						<td class="number row-data" scope="row">${i + 1}</td>
						<td class="title row-data" scope="row">${book.title}</td>
						<td class="author row-data" scope="row">${book.author}</td>
						<td class="pages row-data" scope="row">${book.pages}</td>
						<td class="read row-data" scope="row">${
							book.read
						} <button data-index-number="${i}" class="toggle-btn">Change</button></td>
						<td scope="row"><button class="delete-btn"><span class="delete material-symbols-outlined" data-index-number="${i}">delete
						</span></button></td>
					</tr>`;

		tableBody.insertAdjacentHTML("beforeend", html);
	});
}

window.addEventListener("load", () => {
	exampleBooks();
	displayTable();
	main.addEventListener("click", (e) => buttonOperations(e.target));

	form.addEventListener("submit", (e) => addBookToTable(e));
});
