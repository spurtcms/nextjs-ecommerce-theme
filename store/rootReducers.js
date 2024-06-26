// redux/rootReducer.js
import { combineReducers } from "redux";
import userReducer from "./slices/userSlice";
import userDatas from "./slices/usertwoSlice";
import categoryReducer from './slices/category'
import channelReducer from './slices/channel'
import LoginReducer from './slices/login'

const rootReducer = combineReducers({
  userReducer,
  userDatas,
  categoryReducer,
  channelReducer,
  LoginReducer,
});

export default rootReducer;