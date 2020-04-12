import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8888/',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})
