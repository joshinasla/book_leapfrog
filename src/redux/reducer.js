const initialState = {
  value: "",
  id: [],
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_BOOK":
      return {
        value: action.payload,
      };
    case "UPDATE_BOOK":
      return {
        value: action.payload,
      };
    default:
      return state;
  }
};
export default myReducer;
