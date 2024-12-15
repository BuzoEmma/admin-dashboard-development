import axios from "axios";

const API_URL = import.meta.env.VITE_API_KEY;

export default function authService() {
    const loginAdmin = (email, password, setToken) => {

        const config = {
            headers: {
                'Content-Type': 'application/json'
            }
        }

        axios.post(API_URL + '/rem/mgt/login-admin', {
            email: email,
            password: password
        }, config)
        .then(response => {
            if(response.data.token) {
                localStorage.setItem('admin', JSON.stringify(response.data));
                const admin = JSON.parse(localStorage.getItem('admin'));
                axios.defaults.headers.common['Authorization'] = `Bearer ${admin?.token}`;
                setToken(response.data.token)
            }
            return response;
        })
        .catch(err => {
            console.log(err)
        })
    }

    const logoutAdmin = () => {
        localStorage.removeItem('admin')
    }

    const registerAdmin = (username, passport, password, permissions, email) => {
        return axios.post(API_URL + 'rem/mgt/create-admin', {
            username,
            password,
            passport,
            permissions,
            email
        })
    }

    const getCurrentAdmin = () => {
        return JSON.parse(localStorage.getItem('admin'))
    }

    return {
        loginAdmin,
        logoutAdmin,
        registerAdmin,
        getCurrentAdmin
    }
}