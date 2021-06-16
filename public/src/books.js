function findAuthorById(authors, id) {
  return authors.find((author) => author.id === id);
}

function findBookById(books, id) {
  return books.find((book) => book.id === id);
}

function partitionBooksByBorrowedStatus(books) {
  let result = [];
  let borrowed = books.filter((book) => !book.borrows[0].returned);
  let returned = books.filter((book) => book.borrows[0].returned);
  result.push(borrowed, returned);
  return result;
}

function getBorrowersForBook(book, accounts) {
  const borrowed = book.borrows;
  const result = borrowed.map((borrow) => {
    const account = accounts.find((account) => borrow.id === account.id);
    return { ...borrow, ...account };
  });
  result.length = 10;
  return result;
}

module.exports = {
  findAuthorById,
  findBookById,
  partitionBooksByBorrowedStatus,
  getBorrowersForBook,
};
