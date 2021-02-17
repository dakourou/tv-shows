import { combineReducers } from "redux";
import showsReducer from "./showsReducer";
import searchReducer from "./searchReducer";

const rootReducer = combineReducers({
  show: showsReducer,
  search: searchReducer,
});

export default rootReducer;
