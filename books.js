const books = [
    { author: 'Teejay', title: 'Advance Javascript  Tutorials' },
    { author: 'Amine', title: 'Advance Css  Tutorials' }
];

const booklist = document.querySelector('#book-list ul');

books.forEach(book => {
 const tags = `<li>
<h3>${book.title}</h3>
<p>${book.author}</p>
<button>Remove</button>
</li>`;
booklist.innerHTML+=tags
})