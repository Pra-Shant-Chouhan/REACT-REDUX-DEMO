import { BUY_EGG } from "./egg.Types"

export const buyEgg = (number =1) =>{
    return {
        type: BUY_EGG,
        info: 'buying Egg',
        payload: number
    }
}