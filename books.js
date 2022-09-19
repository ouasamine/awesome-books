let books = [];
const storedBooks = window.localStorage.getItem('booklist');
const parsedBooks = JSON.parse(storedBooks);
const bookList = document.querySelector('#book-list ul');
const addBookBtn = document.forms.book['btn-add'];

function createList(book, index) {
  const listItem = document.createElement('li');
  const tags = `<h3>${book.title}</h3>
        <p>${book.author}</p>
        <button class="remove-btn">Remove</button>
        `;
  listItem.innerHTML = tags;
  bookList.appendChild(listItem);
  const removeBtn = listItem.querySelector('.remove-btn');
  removeBtn.addEventListener('click', () => {
    books.splice(index, 1);
    listItem.remove();
    const jsonObject = JSON.stringify(books);
    window.localStorage.setItem('booklist', jsonObject);
  });
}

function addNewBook(title, author) {
  const newBook = {
    author,
    title,
  };
  books.push(newBook);
  createList(newBook);
}

if (parsedBooks) {
  books = parsedBooks;
}

if (books) {
  books.forEach((book, index) => {
    if (book) {
      createList(book, index);
    }
  });
}

addBookBtn.addEventListener('click', (event) => {
  event.preventDefault();
  const bookAuthor = document.forms.book.author.value;
  const bookTitle = document.forms.book.title.value;
  addNewBook(bookTitle, bookAuthor);
  const jsonObject = JSON.stringify(books);
  window.localStorage.setItem('booklist', jsonObject);
});
