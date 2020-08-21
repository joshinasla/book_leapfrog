const initialState = {
  value: "",
};
const myReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_BOOK":
      return {
        value: action.payload,
      };
    default:
      return state;
  }
};
export default myReducer;
