let myLibrary = [];

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
	title = new Books(title, author, pages, read);
	myLibrary.push(title);
}
addBookToLibrary("The hobbit", "Tolkien", 295, "read");
addBookToLibrary("Look to windward", "Tolkien", 295, "read");

console.log(myLibrary);
