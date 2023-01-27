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
  isRead.addEventListener('click', () => {
    if (isRead.getAttribute('class') === 'not-read') {
      isRead.textContent = 'Read';
      isRead.classList.remove('not-read');
      isRead.classList.add('read');
    } else {
      isRead.textContent = 'Not Read';
      isRead.classList.remove('read');
      isRead.classList.add('not-read');
    }
  });

  const del = document.createElement('button');
  del.textContent = 'Delete';
  del.classList.add('delete-it');
  newDiv.appendChild(del);
  del.addEventListener('click', () => {
    del.parentElement.remove();
  });

  mainContent.appendChild(newDiv);
};

// eslint-disable-next-line no-unused-vars
function showModal() {
  const modal = document.querySelector('.modal-form');
  const overlay = document.querySelector('.overlay');
  overlay.style.visibility = 'visible';
  modal.style.visibility = 'visible';
}
function closeModal() {
  const modal = document.querySelector('.modal-form');
  const overlay = document.querySelector('.overlay');
  modal.style.visibility = 'hidden';
  overlay.style.visibility = 'hidden';
}

// eslint-disable-next-line no-unused-vars
function fetchData() {
  const getTitle = document.querySelector('#title').value;
  const getAuthor = document.querySelector('#author').value;
  const getPages = document.querySelector('#pages').value;
  if (getTitle !== '' && getAuthor !== '' && getPages !== '') {
    const book = new Book(getTitle, getAuthor, getPages);
    book.addBookToLibrary();
    closeModal();
  } else {
    // eslint-disable-next-line no-alert
    alert('Enter data in all the fields');
  }
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';
  document.querySelector('#pages').value = '';
}
