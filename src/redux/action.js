export const searchItem = (book) => {
  return {
    type: "SEARCH_BOOK",
    payload: book,
  };
};
export const updateBookShelf = (id) => {
  return {
    type: "UPDATE_BOOK",
    payload: id,
  };
};

export default { searchItem, updateBookShelf };
