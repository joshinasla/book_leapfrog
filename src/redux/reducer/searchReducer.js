const initialState = {
  value: "",
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SEARCH_BOOK":
      return {
        value: action.payload,
      };

    default:
      return state;
  }
};

export default searchReducer;
