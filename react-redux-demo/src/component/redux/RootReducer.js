import { combineReducers } from "redux";
import eggReducer from "./egg/eggReducer";
import chickenReducer from "./chicken/ChickenReducer";

const RootReducers = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer
})

export default RootReducers;