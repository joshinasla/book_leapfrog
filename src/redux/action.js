export const searchItem = (book) => {
  return {
    type: "SEARCH_BOOK",
    payload: book,
  };
};
export const updateBookShelf = (id) => {
  console.log("action", id);
  return {
    type: "BOOK_SELECTED",
    payload: id,
  };
};

export default { searchItem, updateBookShelf };
