/* eslint-disable no-unused-expressions */
/* eslint-disable class-methods-use-this */
/* eslint-disable max-classes-per-file */
class BookList {
  constructor() {
    this.list = [];
    return this.list;
  }
}

let Booklist = new BookList();

class Book {
  constructor() {
    this.index;
    this.author;
    this.title;
  }

  getBooks() {
    Booklist = JSON.parse(localStorage.getItem('booklist'));
    return Booklist;
  }

  storeBooks() {
    const booklist = JSON.stringify(Booklist);
    localStorage.setItem('booklist', booklist);
  }

  addBook(title, author) {
    if (!Booklist) {
      Booklist = [];
      this.index = 0;
    } else {
      const lastElemIndex = Booklist.slice(-1).pop().index;
      this.index = lastElemIndex + 1;
    }
    this.author = author;
    this.title = title;
    Booklist.push(this);
    this.storeBooks();
  }

  removeBook(elemIndex) {
    Booklist = Booklist.filter((book) => parseInt(book.index) !== parseInt(elemIndex));
    this.storeBooks();
  }
}

function printBookList(bookList, container) {
  container.innerHTML = '';
  bookList.forEach((element) => {
    const listItem = document.createElement('li');
    const tags = `<p>"${element.index} - ${element.title}" by ${element.author}</p>        
        <button class="remove-btn">Remove</button>
        `;
    listItem.innerHTML = tags;
    container.appendChild(listItem);

    const removeBtn = listItem.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
      const books = new Book();
      listItem.remove();
      books.removeBook(element.index);
    });
  });
}
const htmlContainer = document.querySelector('#book-list ul');
const addBookBtn = document.forms.book['btn-add'];

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const bookAuthor = document.forms.book.author.value;
  const bookTitle = document.forms.book.title.value;
  const newb = new Book();
  newb.addBook(bookTitle, bookAuthor);
  const bookList = newb.getBooks();
  printBookList(bookList, htmlContainer);
});
const books = new Book();
if (books.getBooks()) {
  printBookList(books.getBooks(), htmlContainer);
}

const link = document.querySelectorAll('#navbar a');
const list = document.querySelector('#book-list');
const form = document.querySelector('#formfields');
const contact = document.querySelector('#contact');
link.forEach((lnk) => {
  lnk.addEventListener('click', () => {
    if (lnk.id.toString() === 'book-list-lnk') {
      list.classList.remove('hide');
      form.classList.add('hide');
      contact.classList.add('hide');
    } else if (lnk.id.toString() === 'formfields-lnk') {
      list.classList.add('hide');
      form.classList.remove('hide');
      contact.classList.add('hide');
    } else if (lnk.id.toString() === 'contact-lnk') {
      list.classList.add('hide');
      form.classList.add('hide');
      contact.classList.remove('hide');
    }
  });
});

const datetime = document.querySelector('#datetime');

setInterval(() => {
  const date = new Date();
  datetime.innerHTML = `${date.toDateString()}, ${date.toLocaleTimeString()}`;
}, 1000);