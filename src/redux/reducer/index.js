import { combineReducers } from "redux";
import ActiveReducer from "./activeReducer";
import SearchReducer from "./searchReducer";

const rootReducer = combineReducers({
  search: SearchReducer,
  activeBook: ActiveReducer,
});

export default rootReducer;
