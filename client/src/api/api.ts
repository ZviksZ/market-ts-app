import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8888/',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})
/*instance.interceptors.request.use(config => {
    const data = JSON.parse(localStorage.getItem('userData')) || ''
    const token = data.token

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }

    return config
})*/


export const authAPI = {
    login(email: string, password: string) {
        return instance.post('/api/auth/login', {email, password}).then(response => response.data);
    },
    register(userName: string, email: string, password: string) {
        return instance.post('/api/auth/register', {email, password}).then(response => response.data);
    }
}
