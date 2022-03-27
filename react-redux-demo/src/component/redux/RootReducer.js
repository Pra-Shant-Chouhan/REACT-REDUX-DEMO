import { combineReducers } from "redux";
import eggReducer from "./egg/eggReducer";
import chickenReducer from "./chicken/ChickenReducer";
// import  userReducer  from "./users/userReducer";
import userReducer from "./users/userReducer"

const RootReducers = combineReducers({
    egg: eggReducer,
    chicken: chickenReducer,
    user: userReducer
})

export default RootReducers;