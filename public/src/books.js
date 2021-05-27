function findAuthorById(authors, id) {
  let found = authors.find((author) => author.id === id);
  return found;
}

function findBookById(books, id) {
  let found = books.find((book) => book.id === id);
  return found;
}

const partitionBooksByBorrowedStatus = (books) => {
  let results =[];
  const borrowed = books.filter((book) => book.borrows.filter((borrow) => borrow.returned === false).length > 0);
  const returned = books.filter((book) => book.borrows.filter((borrow) => borrow.returned === false).length === 0);
  
  results.push(borrowed);
  results.push(returned);

  return results;
}

function getBorrowersForBook(book, accounts) {

  const borrowerInfo = book.borrows.map((borrow) => ({...borrow, ...accounts.find((account) => borrow.id === account.id)}));

return borrowerInfo.slice(0, 10);

}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
