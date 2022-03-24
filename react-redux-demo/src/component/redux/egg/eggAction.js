import { BUY_EGG } from "./egg.Types"

export const buyEgg = () =>{
    return {
        type: BUY_EGG,
        info:'buying Egg'
    }
}