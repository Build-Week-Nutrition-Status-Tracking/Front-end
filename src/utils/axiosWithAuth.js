import axios from 'axios'

const axiosWithAuth = () =>{
    const token = localStorage.getItem('token')
    axios.create({
        baseURL:'http://localhost:5000',//placeholder for server 
        headers:{
            Authorization: token
        }
    })
}

export default axiosWithAuth