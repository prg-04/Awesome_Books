class Store {
  static getBook() {
    let books;
    if (localStorage.getItem('books') === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem('books'));
    }
    return books;
  }

  static addBook(book) {
    const books = Store.getBook();
    books.push(book);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static removeBook(book) {
    const books = Store.getBook();
    books.splice(books.indexOf(book), 1);
    localStorage.setItem('books', JSON.stringify(books));
  }

  static getBooks() {
    return Store.getBook();
  }
}

export default Store;