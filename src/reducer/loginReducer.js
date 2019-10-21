// import {LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGN_UP_START, SIGN_UP_SUCCESS, SIGN_UP_FAIL} from ''

// export const initialState = () =>{
//    return { 
//        error: '',
//        isFetching: false,
//     }
// }

// const reducer = (state=initialState, action)=>{
//     switch (action.type){
//         case LOGIN_START:
//             return {
//                 ...state,
//                 isFetching: true,
//                 error:''
//             }
//         case LOGIN_SUCCESS:
//             return {
//                 ...state,
//                 isFetching: false,
//                 error:''
//             }
//         case LOGIN_FAIL:
//             return {
//                 ...state,
//                 isFetching: false,
//                 error: action.payload
//             }
//         case LOGOUT:
//             return {
//                 ...state,
//                 isFetching: false,
//                 error:''
//             }
//         case SIGN_UP_START:
//             return {
//                 ...state,
//                 isFetching: true,
//                 error:''
//             }
//         case SIGN_UP_SUCCESS:
//             return {
//                 ...state,
//                 isFetching: false,
//                 error:''
//             }
//         case SIGN_UP_FAIL:
//             return {
//                 ...state,
//                 isFetching: false,
//                 error: action.payload
//             }
//         default:
//             return state;
//     }
// }

