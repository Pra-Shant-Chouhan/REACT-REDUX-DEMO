import { createStore } from "redux";
import RootReducers from "./RootReducer";

const store = createStore(RootReducers)

export default store;