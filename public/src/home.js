function getTotalBooksCount(books = 0) {
  return books.length;
}

function getTotalAccountsCount(accounts = 0) {
  return accounts.length;
}

function getBooksBorrowedCount(books) {
  const borrowedBooks = books.filter((book) => book.borrows.find((borrow) => borrow.returned === false));
  return borrowedBooks.length;
}

function getMostCommonGenres(books) {

  let genreCount = {};
  let genreList = [];

  for (let book of books) {
    const genre = book.genre;
    if (genre in genreCount) {genreCount[genre] += 1} else {genreCount[genre] = 1}
  }
  
  for (let genre in genreCount) {
    genreList.push({name : genre, count : genreCount[genre]});
  }

  genreList.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1);

  const topGenres = genreList.slice(0, 5);
  return topGenres;
}

function getMostPopularBooks(books) { 

  let borrowCount = {};
  let borrowList = [];

  for (let book of books) {
    const title = book.title;
    borrowCount[title] = book.borrows.length
  }
  
  for (let title in borrowCount) {
    borrowList.push({name : title, count : borrowCount[title]});
  }
  
  borrowList.sort((borrowA, borrowB) => borrowA.count < borrowB.count ? 1 : -1);

  const topBorrows = borrowList.slice(0, 5);
  return topBorrows; 
}

function getMostPopularAuthors(books, authors) {

// I need to find the number of borrows for each author. I need to create an array, with an object for each author and the count of total borrows each author has. 
// Once I have the number of borrows for each author, I need to cross-reference the authorId for each book with the first and last name of the author associated
// with the authorId. 

  let borrowList = [];

  for (let book of books) {
    const authorId = Number(book.authorId);
  
   // loop through all books, authors have multiple books

  // cross-reference "authors" array to convert authorId into author names

  const author = authors.find((author) => authorId === author.id)
  let name = `${author.name.first} ${author.name.last}`
  borrowList.push({name, count: book.borrows.length})


  }


  borrowList.sort((borrowA, borrowB) => borrowA.count < borrowB.count ? 1 : -1);

  const topAuthors = borrowList.slice(0, 5);
  return topAuthors;

}

module.exports = {
  getTotalBooksCount,
  getTotalAccountsCount,
  getBooksBorrowedCount,
  getMostCommonGenres,
  getMostPopularBooks,
  getMostPopularAuthors,
};
