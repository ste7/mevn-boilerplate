import axios from 'axios'
import * as auth from '../../../helper/auth'


export const signUp = ({ commit }, data) => {
    return axios.post('http://localhost:8000/api/signup', data).then((response) => {
        commit('setUser', response.data.data);
        auth.storeUser(response.data);
        window.location.replace('#/');
    })
}


export const signIn = ({ commit }, data) => {
    return axios.post('http://localhost:8000/api/signin', data).then((response) => {
        commit('setUser', response.data.data);
        auth.storeUser(response.data);

        window.location.replace('#/');
    });
}


export const signOut = ({ commit }) => {
    auth.removeUser();
    commit('removeUser');
    window.location.replace('#/signin');
}


export const getUser = ({ commit }) => {
    if (auth.userExists()) {
        commit('setUser', auth.getUser());
        // return Promise.resolve();
    }
}
