import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const SIGN_UP_START = 'SIGN_UP_START'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL'

export const registerUser = (user) => dispatch =>{
    console.log('register action')
    dispatch({type:SIGN_UP_START});
    axiosWithAuth()
    .post('users',user)
    .then(res=>{dispatch({type:SIGN_UP_SUCCESS, payload: res})
        console.log(res)
        localStorage.setItem('token',res.data.id)
        })
    .catch(err=>{console.log(err.response)
        dispatch({type:SIGN_UP_FAIL, payload: err})})
}

export const userLogin = () => dispatch =>{
    dispatch({type:LOGIN_START});
    console.log('login action')
    axios
    .get('http://localhost:5000')
    .then(res=>{
        dispatch({type:LOGIN_SUCCESS, payload: res})
        console.log(res)
        })
    .catch(err=>dispatch({type:LOGIN_FAIL, payload: err}))
}

export const userLogout = () => dispatch =>{
    dispatch({type:LOGOUT})
}
