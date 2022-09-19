const books = [
    { author: 'Teejay', title: 'Advance Javascript  Tutorials' },
    { author: 'Amine', title: 'Advance Css  Tutorials' }
];

const bookList = document.querySelector('#book-list ul');
const addBookBtn = document.forms['book']['btn-add'];

// function checkBook (book1, book2) {
//     return book1 == book2;
// }

window.addEventListener('load',() =>{
  createList(books)
})

function createList(bookArr){
  bookArr.forEach((book, index)=> {
    const tags = `<li>
   <h3>${book.title}</h3>
   <p>${book.author}</p>
   <button class="remove-btn">Remove</button>
   </li>`;
   bookList.innerHTML+=tags   
   });  
}

const removeBtn = document.querySelectorAll('.remove-btn');
   console.log(removeBtn);
   removeBtn.forEach((elem) => {
    elem.addEventListener('click', () => {
        alert(book.author);
       })
    });
   

addBookBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const bookAuthor = document.forms['book']['author'].value;
    const bookTitle = document.forms['book']['title'].value;
    addNewBook(bookTitle, bookAuthor, books, bookList);
    const jsonObject = JSON.stringify(books);
    window.localStorage.setItem('booklist',jsonObject);
});

function addNewBook(title, author, bookList, htmlBookList){
    const newBook = {
        author: author,
        title: title
    };
    books.push(newBook)
    createList(books)
    
}

function removeBook (b){

}
