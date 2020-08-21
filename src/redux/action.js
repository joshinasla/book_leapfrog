export const searchItem = (book) => {
  return {
    type: "SEARCH_BOOK",
    payload: book,
  };
};
export default { searchItem };
