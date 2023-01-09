class Book {
	constructor(title, author, id) {
	  this.title = title;
	  this.author = author;
	  this.id = id;
	}
}

class StorageInLocal {
	constructor(){
	  
	}

	getListBooks() {
	  if(localStorage.getItem('awesomeBooks') === null) {
	    this.awesomeBooks = [];
	  } else {
		  this.awesomeBooks = JSON.parse(localStorage.getItem('awesomeBooks'));
	  }

	  return this.awesomeBooks;
	}

	addBook() {

	}
}