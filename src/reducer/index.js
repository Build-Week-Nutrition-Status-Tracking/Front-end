import {combineReducers} from 'redux'
import loginReducer from './loginReducer'
import operationReducer from './operationReducer'

export default combineReducers({
    login: loginReducer,
    operation: operationReducer
})