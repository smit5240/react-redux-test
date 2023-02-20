import rootreducer from "../Reducer";
import thunk from "redux-thunk";
import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

export const Store = createStore(
  rootreducer,
  composeWithDevTools(applyMiddleware(thunk))
);

composeWithDevTools();
