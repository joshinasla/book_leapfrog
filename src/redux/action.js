export const searchItem = (book) => {
  return {
    type: "SEARCH_BOOK",
    payload: book,
  };
};
export const updateBookShelf = (id) => {
  console.log(id);
  return (
    {
      type: "BOOK_SELECTED",
      payload: id,
    },
    console.log("action encoutered", id)
  );
};

export default { searchItem, updateBookShelf };
