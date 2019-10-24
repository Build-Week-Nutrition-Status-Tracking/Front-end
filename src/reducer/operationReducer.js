import {COUNTRY_START, COUNTRY_SUCCESS, COUNTRY_FAIL, CHILD_START, CHILD_SUCCESS, CHILD_FAIL, ADD_CHILD_START, ADD_CHILD_SUCCESS, ADD_CHILD_FAIL, USER_UPDATE_START, USER_UPDATE_SUCCESS, USER_UPDATE_FAIL, DELETE_CHILD_START, DELETE_CHILD_SUCCESS, DELETE_CHILD_ERROR,
COMMUNITY_START, COMMUNITY_SUCCESS, COMMUNITY_FAIL, USER_START, USER_SUCCESS, USER_FAIL} from '../actions/index'



export const initialState = {
    isFetching: false,
    error:'',
    countries: [],
    country:{
        communities:[]
        },
    children:[],
    users: []
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
        console.log(action.payload)
        return({
            ...state,
            isFetching:false,
            countries:[...action.payload],
            error:''

        })
        case(COUNTRY_FAIL):
        return({
            ...state,
            isFetching:false,
            error:'error'
        })
        case(COMMUNITY_START):
        return({
            ...state,
            isFetching:true,
            error:''
        })
        case(COMMUNITY_SUCCESS):
        console.log(state.country.communities,action.payload)
        const newState ={
            ...state,
            isFetching:false,
            error:'',
            country:{communities:[...action.payload]}

        } 
        console.log(newState)
        return (newState)
        case(COMMUNITY_FAIL):
        return({
            ...state,
            isFetching:false,
            error:'error'
        })
        case(CHILD_START):
        return({
            ...state,
            isFetching:true,
            error:'',
        })
        case(CHILD_SUCCESS):
        return({
            ...state,
            isFetching:false,
            error:'',
            children:[...action.payload]
        })
        case(CHILD_FAIL):
        return({
            ...state,
            isFetching:false,
            error:action.payload
        })
        case(ADD_CHILD_START):
        return({
            ...state,
            isFetching:true,
            error:'',
        })
        case(ADD_CHILD_SUCCESS):
        return({
            ...state,
            isFetching:false,
            error:'',
            children:[...action.payload]
        })
        case(ADD_CHILD_FAIL):
        return({
            ...state,
            isFetching:false,
            error:action.payload
        })
        case(USER_START):
        return({
            ...state,
            isFetching:true,
            error:''
        })
        case(USER_SUCCESS):
        return({
            ...state,
            isFetching:false,
            error:'',
            users:[...action.payload]
        })
        case(USER_FAIL):
        return({
            ...state,
            isFetching:false,
            error: action.payload
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
            error:'',
            user:[...action.payload]
        })
        case(USER_UPDATE_FAIL):
        return({
            ...state,
            isFetching:false,
            error: action.payload
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
            return{
                ...state
            }
    }
    
}