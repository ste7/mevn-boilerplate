import axios from 'axios'


export function userExists() {
    return localStorage.getItem('user') ? true : false;
}


export function storeUser(user) {
    if (! userExists()) {
        localStorage.setItem('user', JSON.stringify(user));
    }
}


export function getLocalStorage() {
    var user = JSON.parse(localStorage.getItem('user'));
    return user;
}


export function getUser() {
    if (userExists()) {
        return getLocalStorage().data;
    }
}


export function getToken() {
    return getLocalStorage().token;
}


export function removeUser() {
    localStorage.removeItem('user');
}


export function setHttpToken() {
    if (userExists()) {
        return axios.defaults.headers.common['Authorization'] = 'Bearer ' + getToken();
    }
}
