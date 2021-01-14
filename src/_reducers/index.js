import { combineReducers } from "redux";
import user from "./user_reducer";
import BmrReducer from "./analyzer"

const rootReducer = combineReducers({
  user, BmrReducer: BmrReducer
});

export default rootReducer;
