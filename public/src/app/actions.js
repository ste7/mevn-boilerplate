import axios from 'axios'
import * as auth from './auth'
import { bus } from '../bus'


export function signUp(data) {
    return axios.post('http://localhost:8000/api/signup', data).then((response) => {
        auth.storeUser(response.data);
        window.location.replace('#/users');
    });
}


export function signIn(data) {
    return axios.post('http://localhost:8000/api/signin', data).then((response) => {
        auth.storeUser(response.data);
        window.location.replace('#/users');

        bus.$emit('sign-in', {
            signedIn: true,
            email: response.data.data.email
        });
    });
}


export function signOut() {
    auth.removeUser();
    window.location.replace('#/');
}


export function getUsers() {
    auth.setHttp();
    return axios.get('http://localhost:8000/api/users');
}
