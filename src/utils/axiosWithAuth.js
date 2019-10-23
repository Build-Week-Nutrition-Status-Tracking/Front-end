import axios from 'axios'

const axiosWithAuth = () =>{
    const token = localStorage.getItem('token')
    return axios.create({
        baseURL:'https://backend-nutrition-tracker.herokuapp.com',//placeholder for server 
        headers:{
            Authorization: token
        }
    })
}

export default axiosWithAuth