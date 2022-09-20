
class BookList {
  constructor(books){
    this.list = [];
    return this.list;
  }
}

let Booklist = new BookList;

class Book {
  constructor() {
    this.index;
    this.author;
    this.title;
  }
  getBooks(){
    Booklist = JSON.parse(localStorage.getItem('booklist'));
    return Booklist;
  }

  storeBooks(){
    let booklist = JSON.stringify(Booklist);
    localStorage.setItem('booklist', booklist);
  }

  addBook(title, author) {
    this.index = Booklist.length ;
    this.author = author;
    this.title = title;
    Booklist.push(this);
    this.storeBooks();
  }

  removeBook(elemIndex){
    Booklist.forEach((book, index)=>{
      if(book.index == elemIndex){
        Booklist.splice(index, 1);
      }
    });
    this.storeBooks();
  }

}

function printBookList (bookList, container){
  container.innerHTML = '';
  bookList.forEach(element => {
    const listItem = document.createElement('li');
    const tags = `<p>"${element.title}" by ${element.author}</p>        
        <button class="remove-btn">Remove</button>
        `;
    listItem.innerHTML = tags;
    container.appendChild(listItem);

    const removeBtn = listItem.querySelector('.remove-btn');
    removeBtn.addEventListener('click', () => {
      const books = new Book;
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
printBookList(books.getBooks(), htmlContainer);