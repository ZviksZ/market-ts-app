import axios from 'axios'

const instance = axios.create({
    baseURL: 'http://localhost:8888/',
    headers: {
        'Access-Control-Allow-Origin' : '*',
        'Access-Control-Allow-Credentials':true,
        'Access-Control-Allow-Methods' : 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
    }
})
instance.interceptors.request.use(config => {
    /*const data = JSON.parse(localStorage.getItem('userData')) || ''
    const token = data.token

    if (token) {
        config.headers.Authorization = `Bearer ${token}`
    }*/

    return config
})




export const authAPI = {
    login(login: string, password: string) {
        return instance.post<any>('/api/auth/login', {login, password}).then(response => response.data);
    },

    register(
        userName: string,
        name: string,
        surname: string,
        userEmail: string,
        password: string,
        avatar: string = '',
        userType: string = 'User') {
        return instance.post<any>('/api/auth/register', {
            userName: userName,
            name: name,
            surname: surname,
            userEmail: userEmail,
            password: password,
            avatar: avatar,
            userType: userType
        }).then(response => response.data);
    }
}
