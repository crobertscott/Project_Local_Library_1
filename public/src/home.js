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

  const topGenres = (array) => {return array.slice(0, 5);}

  for (let book of books) {
    const genre = book.genre;
    if (genre in genreCount) {genreCount[genre] += 1} else {genreCount[genre] = 1}
  }
  
  for (let genre in genreCount) {
    genreList.push({name : genre, count : genreCount[genre]});
  } 
    
  genreList.sort((genreA, genreB) => genreA.count < genreB.count ? 1 : -1);

  let result = topGenres(genreList);
  return result; 
  
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

  let borrowList = [];

  for (let book of books) {
    const authorId = Number(book.authorId);
  
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
