function findAccountById(accounts, barcode) {
  return accounts.find((accounts) => accounts.id === barcode);
}

function sortAccountsByLastName(accounts) {
  return accounts.sort((nameA, nameB) =>
    nameA.name.last < nameB.name.last ? -1 : 1
  );
}

function getTotalNumberOfBorrows(account, books) {
  let borrowedCount = 0;
  books.forEach((book) => {
    book.borrows.forEach((transaction) => {
      if (transaction.id === account.id) {
        borrowedCount++;
      }
    });
  });
  return borrowedCount;
}

function getBooksPossessedByAccount(account, books, authors) {
  let borrowedBooks = books.filter((book) =>
    book.borrows.find(
      (borrow) => borrow.returned === false && borrow.id === account.id
    )
  );
  return borrowedBooks.map((book) => {
    return {
      ...book,
      author: authors.find((author) => author.id === book.authorId),
    };
  });
}

module.exports = {
  findAccountById,
  sortAccountsByLastName,
  getTotalNumberOfBorrows,
  getBooksPossessedByAccount,
};
