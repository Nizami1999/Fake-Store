import { combineReducers } from "redux";
import productsReducer from "./reducer/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
});

export default rootReducer;
