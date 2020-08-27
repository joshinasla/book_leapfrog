const initialState = {
  bookID: [],
};

const activeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_SELECTED":
      return {
        ...state,
        bookID: [...state.bookID, action.payload],
      };
    case "UPDATE_BOOK_DETAILS":
      return {
        ...state,
        bookDetails: [...state.bookDetails, action.bookDetails],
      };
    default:
      return state;
  }
};

export default activeReducer;
