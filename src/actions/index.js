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
export const ADD_COUNTRY_START = 'ADD_COUNTRY_START'
export const ADD_COUNTRY_SUCCESS = 'ADD_COUNTRY_SUCCESS'
export const ADD_COUNTRY_FAIL = 'ADD_COUNTRY_FAIL'
export const CHILD_START = 'CHILD_START'
export const CHILD_SUCCESS = 'CHILD_SUCCESS'
export const CHILD_FAIL = 'CHILD_FAIL'
export const ADD_CHILD_START = 'ADD_CHILD_START'
export const ADD_CHILD_SUCCESS = 'ADD_CHILD_SUCCESS'
export const ADD_CHILD_FAIL = 'ADD_CHILD_FAIL'
export const COMMUNITY_START = 'COMMUNITY_START'
export const COMMUNITY_SUCCESS = 'COMMUNITY_SUCCESS'
export const COMMUNITY_FAIL = 'COMMUNITY_FAIL'
export const COMMUNITY_POST_START = 'COMMUNITY_POST_START'
export const COMMUNITY_POST_SUCCESS = 'COMMUNITY_POST_SUCCESS'
export const COMMUNITY_POST_FAIL = 'COMMUNITY_POST_FAIL'
export const USER_UPDATE_START = 'USER_UPDATE_START'
export const USER_UPDATE_SUCCESS = 'USER_UPDATE_SUCCESS'
export const USER_UPDATE_FAIL = 'USER_UPDATE_FAIL'
export const USER_START = 'USER_START'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAIL = 'USER_FAIL'
export const DELETE_CHILD_START = 'DELETE_CHILD_START'
export const DELETE_CHILD_SUCCESS = 'DELETE_CHILD_SUCCESS'
export const DELETE_CHILD_ERROR = 'DELETE_CHILD_ERROR'




export const registerUser = (user, history) => dispatch =>{
    console.log('register action')
    dispatch({type:SIGN_UP_START});
    axiosWithAuth()
    .post('/user/register',user)
    .then(res=>{dispatch({type:SIGN_UP_SUCCESS, payload: res})
        console.log(res)
        history.push('/signin')
        })
    .catch(err=>{console.log(err.response)
        dispatch({type:SIGN_UP_FAIL, payload: err})
        history.push('/signin')
    })
}

export const userLogin = (user,history) => dispatch =>{
    dispatch({type:LOGIN_START});
    console.log('login action')
    axiosWithAuth()
    .post('user/login',user)
    .then(res=>{
        dispatch({type:LOGIN_SUCCESS, payload: res})
        console.log(res)
        localStorage.setItem('token',res.data.token)
        history.push('/homepage')
        })
    .catch(err=>{
        console.log(err.response)
        dispatch({type:LOGIN_FAIL, payload: err})})
}

export const userLogout = () => dispatch =>{
    dispatch({type:LOGOUT})
    localStorage.removeItem('token')
}

// export const addCountry = (user)=> dispatch =>{
//     dispatch({type:COUNTRY_START});
//     axiosWithAuth()
//     .post('',user.country.id)
//     .then(res=>{console.log(res)})
//     .catch(err=>console.log(err))
// }

export const getCountry = (user)=> dispatch =>{
    dispatch({type:COUNTRY_START});
    axiosWithAuth()
    .get('/screenings/country')
    .then(res=>{dispatch({type:COUNTRY_SUCCESS, payload:res.data})})
    .catch(err=>{dispatch({type:COUNTRY_FAIL, payload:err.response})})
}

export const setCountry = (country)=> dispatch =>{
    //not working
    dispatch({type:COUNTRY_START});
    axiosWithAuth()
    .post('/screenings/country',country)
    .then(res=>{
        console.log('this is the response',res)
        console.log(`.post('/screenings/country',${country})`)
        dispatch({type:COUNTRY_SUCCESS, payload:res.data})})
    .catch(err=>{dispatch({type:COUNTRY_FAIL, payload:err.response})
})
}

export const getCommunity = (id)=> dispatch =>{
    dispatch({type:COMMUNITY_START});
    axiosWithAuth()
    .get(`/screenings/country/${id}/communities`)
    .then(res=>{console.log(res)
        dispatch({type:COMMUNITY_SUCCESS, payload:res.data})})
    .catch(err=>{dispatch({type:COMMUNITY_FAIL, payload:err.response})})
}

export const postCommunity = (id,com) => dispatch =>{
    // not working get more information on this
    dispatch({type:COMMUNITY_POST_START});
    axiosWithAuth()
    .post(`/screenings/country/${id}/communities`,com)
    .then(res=>{console.log(res)
    dispatch({type:COMMUNITY_POST_SUCCESS, payload:res.data})})
    .catch(err=>{dispatch({type:COMMUNITY_POST_FAIL, payload:err.response})})
}

export const updateUser = (user) => dispatch =>{
    dispatch({type:USER_UPDATE_START})
    axiosWithAuth()
    .put('',user)
    .then(res=>console.log(res))
    .catch(err=>console.log(err.response))
}


export const getUsers = (user) => dispatch =>{
    dispatch({type:USER_START})
    axiosWithAuth()
    .get('/user')
    .then(res=>{
        console.log('users',res)
        dispatch({type:USER_SUCCESS, payload: res.data.users})})
    .catch(err=>dispatch({type:USER_FAIL, payload:err.response}))
}

export const deleteChild = (id) => dispatch =>{
    dispatch({type:DELETE_CHILD_START})
    axiosWithAuth()
    .delete(`/screenings/kids/${id}`)
    .then(res=>console.log(res))
    .catch(err=>console.log(err.response))
}

export const addChild = (id, child) => dispatch =>{
    //id is for community'
    console.log('hello')
    dispatch({type:ADD_CHILD_START})
    axiosWithAuth()
    .post(`/screenings/communities/${id}/kids`,child)
    .then(res=>{
        // dispatch({type:ADD_CHILD_SUCCESS, payload:res})
        console.log(res)})
    .catch(err=>console.log(err.response))
}

export const getChild = (id) => dispatch =>{
    dispatch({type:CHILD_START})
    axiosWithAuth()
    .get(`/screenings/communities/${id}/kids`)
    .then(res=>{
        dispatch({type:CHILD_SUCCESS, payload:res.data})})
    .catch(err=>{
        dispatch({type:CHILD_FAIL, payload:err.response})})
}

