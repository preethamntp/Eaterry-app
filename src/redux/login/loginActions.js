// import {
//     LOGIN_REQUEST,
//     LOGIN_SUCCESS,
//     LOGIN_FAILURE
// } from './loginTypes';

// import axios from 'axios';
// // import user from "./fakeUserStore.js/user";

// export const loginRequest = () => {
//     return {
//         type: LOGIN_REQUEST
//     }
// }

// export const loginSuccess = (user) => {
//     return {
//         type: LOGIN_SUCCESS,
//         payload: user
//     }
// }

// export const loginFailure = (error) => {
//     return {
//         type: LOGIN_FAILURE,
//         payload: error
//     }
// }

// // export const loginUser = () => {
// //     return (dispatch) => {
// //         dispatch(loginRequest)
// //         axios.get(user('root', "root@123"))
// //             .then(response => {
// //                 const user = response.data;
// //                 dispatch(loginSuccess(user))
// //             }).catch(error => {
// //                 dispatch(loginFailure(error))
// //             })
// //     }
// // }

// export const loginUser = () => {
//     return (dispatch) => {
//         dispatch(loginRequest)

//         axios.get('https://jsonplaceholder.typicode.com/users')
//             .then(response => {
//                 const users = response.data
//                 dispatch(loginSuccess(users))
//             })
//             .catch(error => {
//                 const errorMsg = error.message
//                 dispatch(loginFailure(errorMsg))
//             })
//     }
// }

import {
    LOGIN_REQUEST,
    LOGIN_SUCCESS,
    LOGIN_FAILURE
} from './loginTypes';

import axios from "axios"

export const fetchUsersRequest = () => {
    return {
        type: LOGIN_REQUEST,

    }
};

export const fetchUserSuccess = (users) => {
    return {
        type: LOGIN_SUCCESS,
        payload: users
    }
};

export const fetchUsersFailure = (error) => {
    return {
        type: LOGIN_FAILURE,
        payload: error
    }
};

export const loginUser = () => {
    return (dispatch) => {
        dispatch(fetchUsersRequest)

        axios.get('https://jsonplaceholder.typicode.com/users')
            .then(response => {
                const users = response.data
                dispatch(fetchUserSuccess(users))
            })
            .catch(error => {
                const errorMsg = error.message
                dispatch(fetchUsersFailure(errorMsg))
            })
    }
}