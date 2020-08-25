const initialState = {
  id: "",
};
const activeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_SELECTED":
      return {
        id: action.payload,
      };

    default:
      return state;
  }
};
export default activeReducer;
