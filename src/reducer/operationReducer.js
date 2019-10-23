import {COUNTRY_START, COUNTRY_SUCCESS, COUNTRY_FAIL, CHILD_START, CHILD_SUCCESS, CHILD_FAIL, USER_UPDATE_START, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, DELETE_CHILD_START, DELETE_CHILD_SUCCESS, DELETE_CHILD_ERROR} from '../actions/index'



const initialState = {
    isFetching: false,
    error:'',
}

export default function operationReducer(state=initialState, action){
    switch(action.type){
        case(COUNTRY_START):
        return({
            ...state,
            isFetching:true,
            error:''
        })
        case(COUNTRY_SUCCESS):
        return({
            ...state,
            isFetching:false,
            error:''
        })
        case(COUNTRY_FAIL):
        return({
            ...state,
            isFetching:false,
            error:'error'
        })
        case(CHILD_START):
        return({
            ...state,
            isFetching:true,
            error:''
        })
        case(CHILD_SUCCESS):
        return({
            ...state,
            isFetching:false,
            error:''
        })
        case(CHILD_FAIL):
        return({
            ...state,
            isFetching:false,
            error:'error'
        })
        case(USER_UPDATE_START):
        return({
            ...state,
            isFetching:true,
            error:''
        })
        case(USER_UPDATE_SUCCESS):
        return({
            ...state,
            isFetching:false,
            error:''
        })
        case(USER_UPDATE_FAIL):
        return({
            ...state,
            isFetching:false,
            error:'error'
        })
        case(DELETE_CHILD_START):
        return({
            ...state,
            isFetching:true,
            error:''
        })
        case(DELETE_CHILD_SUCCESS):
        return({
            ...state,
            isFetching:false,
            error:''
        })
        case(DELETE_CHILD_ERROR):
        return({
            ...state,
            isFetching:false,
            error:'error'
        })
        default:
            return(state)
    }
    
}