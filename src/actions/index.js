import axios from 'axios'

const LOGIN_START = 'LOGIN_START'
const LOGIN_FAIL = 'LOGIN_FAIL'
const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
const LOGOUT = 'LOGOUT'
const SIGN_UP_START = 'SIGN_UP_START'
const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
const SIGN_UP_FAIL = 'SIGN_UP_FAIL'

export const registerUser = () => dispatch =>{
    dispatch({type:SIGN_UP_START});
    axios
    .get('http://localhost:5000')
    .then(res=>dispatch({type:SIGN_UP_SUCCESS, payload: res}))
    .catch(err=>dispatch({type:SIGN_UP_FAIL, payload: err}))
}

export const userLogin = () => dispatch =>{
    dispatch({type:LOGIN_START});
    axios
    .get('http://localhost:5000')
    .then(res=>dispatch({type:LOGIN_SUCCESS, payload: res}))
    .catch(err=>dispatch({type:LOGIN_FAIL, payload: err}))
}

export const userLogout = () => dispatch =>{
    dispatch({type:LOGOUT})
}
