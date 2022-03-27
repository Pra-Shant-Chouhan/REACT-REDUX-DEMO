import { createStore, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";
import RootReducers from "./RootReducer";
import thunk from 'redux-thunk'

const store = createStore(RootReducers, composeWithDevTools(applyMiddleware(logger, thunk)))

export default store;