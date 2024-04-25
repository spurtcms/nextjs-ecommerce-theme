
import { combineReducers } from "redux";
import cartReducer from "@/redux/slices/cartSlice";
import catgoReducer from "@/redux/slices/catgorySlice"

const rootReducer = combineReducers({
  cartReducer,
  catgoReducer
});

export default rootReducer;