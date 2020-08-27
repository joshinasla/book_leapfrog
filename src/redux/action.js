export const searchItem = (book) => {
  return {
    type: "SEARCH_BOOK",
    payload: book,
  };
};

export const updateBookShelf = (id) => {
  return {
    type: "BOOK_SELECTED",
    payload: id,
  };
};

export const updateBookDetails = (bookDetails) => {
  return {
    type: "UPDATE_BOOK_DETAILS",
    bookDetails: bookDetails,
  };
};

export default { searchItem, updateBookShelf, updateBookDetails };
