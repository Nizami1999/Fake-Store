import { combineReducers } from "redux";
import productReducer from "./reducer/productReducer";
import productsReducer from "./reducer/productsReducer";

const rootReducer = combineReducers({
  products: productsReducer,
  product: productReducer,
});

export default rootReducer;
