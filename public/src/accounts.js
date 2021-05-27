const findAccountById = (accounts, id) => {
  let found = accounts.find((account) => account.id === id);
  return found;
}

const sortAccountsByLastName = (accounts) => {
  accounts.sort((accountA, accountB) => accountA.name.last > accountB.name.last ? 1 : -1);
  return accounts;
}

const getTotalNumberOfBorrows = (account, books) => {  
  const borrowedBooks = books.find((book) => book.borrows.filter((borrow) => borrow.id === account.id));
  return borrowedBooks.borrows.length;
}

const getBooksPossessedByAccount = (account, books, authors) => {
  const foundBooks = books.filter((book) => book.borrows.filter((borrow) => borrow.id === account.id && borrow.returned === false).length > 0); 

  foundBooks.forEach((book) => book.author = authors.find((author) => author.id === book.authorId));

   return foundBooks;

}



module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
