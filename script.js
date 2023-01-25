const Library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}
let count = 0;

function afterRemove() {
}

Book.prototype.addBookToLibrary = function () {
  const mainContent = document.querySelector('main');
  const newDiv = document.createElement('div');
  count += 1;
  newDiv.setAttribute('data-key', `${count}`);
  const titleOfBook = document.createElement('div');
  titleOfBook.textContent = this.title;
  titleOfBook.classList.add('title-of-book');
  newDiv.appendChild(titleOfBook);

  const authorOfBook = document.createElement('div');
  authorOfBook.textContent = this.author;
  newDiv.appendChild(authorOfBook);

  const pagesOfBook = document.createElement('div');
  pagesOfBook.textContent = `${this.pages} pages`;
  newDiv.appendChild(pagesOfBook);

  const isRead = document.createElement('button');
  isRead.textContent = 'Not Read';
  isRead.classList.add('not-read');
  newDiv.appendChild(isRead);

  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.classList.add('delete-it');
  del.setAttribute('data-key', `${count}`);
  newDiv.appendChild(del);

  // Event listener for delete button
  del.addEventListener('click', () => {
    // afterRemove(count);
  });
  Library.push(newDiv);

  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < Library.length; i++) {
    mainContent.appendChild(Library[i]);
  }
};

const addButton = document.querySelector('#add-button');
addButton.addEventListener('click', () => {
  const book = new Book('Jungle Book', 'J. K. rowling', 295);
  book.addBookToLibrary();
});
