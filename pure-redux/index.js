const redux = require('redux');
const reduxLogger = require('redux-logger')
const combineReducer = redux.combineReducers
const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;
const logger = reduxLogger.createLogger();

const BUY_EGG = "BUY_EGG"
const BUY_CHICKEN = "BUY_CHICKEN"

function buyEgg() {
    return {
        type: BUY_EGG,
        info:'buying Egg'
    }
}
function buyChicken() {
    return {
        type: BUY_CHICKEN,
        info:'buying chicken'
    }
}

const initialEggState = {
    numOfEggs : 100
  
}
const initialChickenState = {
    numOfChickens : 10
}

const eggReducer = (state = initialEggState, action) => {
    switch (action.type) {
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - 1
            };
        
        default:
            return state;
    }
}
const chickenReducer = (state = initialChickenState, action) => {
    switch (action.type) {
        case BUY_CHICKEN:
            return {
                ...state,
                numOfChickens: state.numOfChickens - 1
            };
        default:
            return state;
    }
}

const rootReducer = combineReducer({
    egg: eggReducer,
    chicken: chickenReducer
})

const store = createStore(rootReducer, applyMiddleware(logger))
console.log('Initial State', store.getState());
const unsubscribe = store.subscribe(() => {})
// const unsubscribeMe = store.subscribe(() => console.log(store.getState()))
store.dispatch(buyEgg());
store.dispatch(buyEgg());
store.dispatch(buyChicken());
unsubscribe();