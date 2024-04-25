
import { combineReducers } from "redux";
import cartReducer from "@/redux/slices/cartSlice";

const rootReducer = combineReducers({
  cartReducer
});

export default rootReducer;