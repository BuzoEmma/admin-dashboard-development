import axios from "axios";

const API_URL = import.meta.env.VITE_API_KEY;

export function getTenants() {

    const admin = JSON.parse(localStorage.getItem('admin'));

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': admin.token
        }
    }

    return axios.get(API_URL + '/rem/mgt/tenants', config)
    .then(response => {
        return response
    })
    .catch(err => {
        console.log(err.message)
    })

}

export function getAgents() {

    const admin = JSON.parse(localStorage.getItem('admin'));

    const config = {
        headers: {
            'Content-Type': 'application/json',
            'Authorization': admin.token
        }
    }

    return axios.get(API_URL + '/rem/mgt/agents', config)
    .then(response => {
        return response
    })
    .catch(err => {
        console.log(err.message)
    })

}