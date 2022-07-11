import axios from 'axios'

const API_URL_R = 'https://imarikapeaceadmin.herokuapp.com/users/register/'
const API_URL_L = 'https://imarikapeaceadmin.herokuapp.com/users/login/'


//Register user
const register = async (userData) => {
    const response = await axios.post(API_URL_R, userData)

    return response.data
}

//Login user
const login = async (userData) => {
    const response = await axios.post(API_URL_L, userData)

    if(response.data){
        localStorage.setItem('user', JSON.stringify(response.data))
    }

    return response.data
}

//logout user
const logout = () => {
    localStorage.removeItem('user')
}

const authService = {
    register,
    login,
    logout
}

export default authService