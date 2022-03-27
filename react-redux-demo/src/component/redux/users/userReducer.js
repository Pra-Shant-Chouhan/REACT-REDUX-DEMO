import {FETCH_USERS_REQUEST, FETCH_USERS_SUCCESS,FETCH_USERS_FAILURE} from './userTypes'


const initialState = {
    lodding: false,
    users: [],
    error: ''
}

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_USERS_REQUEST:
            return {
                ...state,
                lodding:true
            }
        case FETCH_USERS_SUCCESS:
            return {
                lodding: false,
                user: action.payload,
                error: ''
            }
        case FETCH_USERS_FAILURE:
            return {
                ...state,
                lodding: false,
                user: [],
                error:action.payload
            }
        default:
            return state
    }
}

export default userReducer;