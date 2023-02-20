import cartreducer from "./Cartreducer";
import { combineReducers } from "redux";

const rootreducer = combineReducers({
  cart: cartreducer,
});
export default rootreducer;
