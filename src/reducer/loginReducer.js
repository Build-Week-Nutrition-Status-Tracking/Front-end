import {LOGIN_START, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT, SIGN_IN_START, SIGN_IN_SUCCESS, SIGN_IN_FAIL} from ''

export const initialState = () =>{
   return { 
       error: '',
       isFetching: false,
    }
}

const reducer = (state=initialState, action)=>{
    switch (action.type){
        case LOGIN_START:
            return {
                ...state,
                isFetching: true,
                error:''
            }
        case LOGIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error:''
            }
        case LOGIN_FAIL:
            return {
                ...state,
                isFetching: false,
                error:''
            }
        case LOGOUT:
            return {
                ...state,
                isFetching: false,
                error:''
            }
        case SIGN_IN_START:
            return {
                ...state,
                isFetching: true,
                error:''
            }
        case SIGN_IN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error:''
            }
        case SIGN_IN_FAIL:
            return {
                ...state,
                isFetching: false,
                error:''
            }
        default:
            return state;
    }
}