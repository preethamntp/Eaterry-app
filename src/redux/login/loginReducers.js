import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './loginTypes';


const initialState = {
    loding: false,
    user: [],
    error: "",
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN_REQUEST:
            return {
                ...state,
                loding: true
            }
            break;
        case LOGIN_SUCCESS:
            return {
                loding: false,
                    user: action.payload,
                    error: ''
            }
            break;
        case LOGIN_FAILURE:
            return {
                loding: false,
                    user: [],
                    error: action.payload
            }
            default:
                return {
                    state
                }
                break;
    }
}

export default reducer