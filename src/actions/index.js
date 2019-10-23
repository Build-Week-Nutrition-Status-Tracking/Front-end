import axios from 'axios'
import axiosWithAuth from '../utils/axiosWithAuth'

export const LOGIN_START = 'LOGIN_START'
export const LOGIN_FAIL = 'LOGIN_FAIL'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT = 'LOGOUT'
export const SIGN_UP_START = 'SIGN_UP_START'
export const SIGN_UP_SUCCESS = 'SIGN_UP_SUCCESS'
export const SIGN_UP_FAIL = 'SIGN_UP_FAIL'
export const COUNTRY_START = 'COUNTRY_START'
export const COUNTRY_SUCCESS = 'COUNTRY_SUCCESS'
export const COUNTRY_FAIL = 'COUNTRY_FAIL'
export const CHILD_START = 'CHILD_START'
export const CHILD_SUCCESS = 'CHILD_SUCCESS'
export const CHILD_FAIL = 'CHILD_FAIL'
export const USER_UPDATE_START = 'USER_UPDATE_START'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL'
export const DELETE_CHILD_START = 'DELETE_CHILD_START'
export const DELETE_CHILD_SUCCESS = 'DELETE_CHILD_SUCCESS'
export const DELETE_CHILD_ERROR = 'DELETE_CHILD_ERROR'



export const registerUser = (user) => dispatch =>{
    console.log('register action')
    dispatch({type:SIGN_UP_START});
    axiosWithAuth()
    .post('register',user)
    .then(res=>{dispatch({type:SIGN_UP_SUCCESS, payload: res})
        console.log(res)
        })
    .catch(err=>{console.log(err.response)
        dispatch({type:SIGN_UP_FAIL, payload: err})})
}

export const userLogin = (user) => dispatch =>{
    dispatch({type:LOGIN_START});
    console.log('login action')
    axiosWithAuth()
    .post('login',user)
    .then(res=>{
        dispatch({type:LOGIN_SUCCESS, payload: res})
        console.log(res)
        localStorage.setItem('token',res.data.token)
        })
    .catch(err=>{
        console.log(err.response)
        dispatch({type:LOGIN_FAIL, payload: err})})
}

export const userLogout = () => dispatch =>{
    dispatch({type:LOGOUT})
}

export const addCountry = (user)=> dispatch =>{
    dispatch({type:COUNTRY_START});
    axiosWithAuth()
    .post('',user.country.id)
    .then(res=>{console.log(res)})
    .catch(err=>console.log(err))
}

export const updateUser = (user) => dispatch =>{
    dispatch({type:USER_UPDATE_START})
    axiosWithAuth()
    .put('',user)
    .then(res=>console.log(res))
    .catch(err=>console.log(err.response))
}

export const deleteChild = (user) => dispatch =>{
    dispatch({type:DELETE_CHILD_START})
    axiosWithAuth()
    .delete('',user)
    .then(res=>console.log(res))
    .catch(err=>console.log(err.response))
}

export const addChild = (user) => dispatch =>{
    dispatch({type:CHILD_START})
    axiosWithAuth()
    .post('',user)
    .then(res=>console.log(res))
    .catch(err=>console.log(err.response))
}