import { BUY_EGG } from "./egg.Types"

const initialEggState = {
    numOfEggs : 100
  
}

const eggReducer = (state = initialEggState, action) => {
    switch (action.type) {
        case BUY_EGG:
            return {
                ...state,
                numOfEggs: state.numOfEggs - action.payload
            };
        
        default:
            return state;
    }
}

export default eggReducer;