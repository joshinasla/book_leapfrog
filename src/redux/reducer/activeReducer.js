const initialState = {
  id: "",
};
const activeReducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_SELECTED":
      console.log("reducer", action.payload);
      return {
        id: action.payload,
      };

    default:
      return state;
  }
};
export default activeReducer;
