import axios from "axios"

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');
    return axios.create({
        baseURL: 'https://localhost:7000/user',
        headers: {
            Authorization: token
            
        }
    })
}

export default axiosWithAuth