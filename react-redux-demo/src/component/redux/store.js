import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import RootReducers from "./RootReducer";

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(logger)))

export default store;