import Store from './store.js';

class UI {
  static displayBook() {
    const books = Store.getBook();
    books.forEach((book) => {
      UI.addBookList(book);
    });
  }

  static addBookList(book) {
    const list = document.querySelector('#books');
    const row = document.createElement('tr');
    const rows = list.querySelectorAll('tr');
    const lastRow = rows[rows.length - 1];
    row.classList = 'd-flex justify-content-between gap-2 align-items-center mb-3';

    row.innerHTML = `
            <td class="flex-1">${book.title}</td>
            <td class="flex-1 flex">by</td>
            <td>${book.author}</td>
            <td class="flex-grow-1 d-flex justify-content-end"><button href="#" class="btn btn-danger delete">remove</button></td>
        `;
    if (lastRow && lastRow.classList.contains('gray')) {
      row.classList.add('white');
    } else {
      row.classList.add('gray');
    }

    list.appendChild(row);
  }

  static showAlert(message, className) {
    const div = document.createElement('div');
    div.className = `alert alert-${className}`;
    div.appendChild(document.createTextNode(message));
    const container = document.querySelector('body');
    const form = document.querySelector('#form');
    container.insertBefore(div, form);

    setTimeout(() => document.querySelector('.alert').remove(), 2000);
  }

  static clearFields() {
    document.querySelector('#title').value = '';
    document.querySelector('#author').value = '';
  }

  static deleteBook(target) {
    if (target.classList.contains('delete')) {
      target.parentElement.parentElement.remove();
    }
  }
}

export default UI;
