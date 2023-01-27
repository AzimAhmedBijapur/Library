const Library = [];

function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

// eslint-disable-next-line func-names
Book.prototype.addBookToLibrary = function () {
  const mainContent = document.querySelector('main');
  const newDiv = document.createElement('div');
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
  newDiv.appendChild(del);

  mainContent.appendChild(newDiv);
};

function addCard() {
  const book = new Book('jungle book', 'j k rowling', 295);
  book.addBookToLibrary();
}
