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

	addBook(book) {
      const newBook = {
        id : this.id, title: book.title, author: book.author 
      }
      const awesomeBooks = this.getListBooks()
      awesomeBooks.push(newBook)
      localStorage.setItem('awesomeBooks', JSON.stringify(awesomeBooks))
      this.numberOfBooks += 1
	}
}