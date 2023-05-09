import Book from './book.js';
import UI from './ui.js';
import Store from './store.js';
import navbar from './navbar.js';
import now from './dateTime.js';

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;

  if (title === '' || author === '') {
    UI.showAlert('Please fill in the fields', 'danger');
  } else {
    const book = new Book(title, author);
    UI.addBookList(book);
    UI.clearFields();
    Store.addBook(book);
    UI.showAlert('Book added', 'success');
  }
});

document.querySelector('#books').addEventListener('click', (e) => {
  UI.deleteBook(e.target);
  Store.removeBook(e.target);
  UI.showAlert('Book deleted', 'success');
});

const hideAll = () => {
  document.querySelector('form').style.display = 'none';
  document.querySelector('#contact').style.display = 'none';
  document.querySelector('#add_book').style.display = 'none';
};

document.addEventListener('DOMContentLoaded', () => {
  navbar();
  UI.displayBook();
  hideAll();
});

now();

setInterval(now, 1000);
