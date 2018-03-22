import * as auth from '../helper/auth'
import store from '../store'


export const authenticate = (to, from, next) => {
    if (! auth.userExists()) {
        next('signin')
    } else {
        store.dispatch('authenticateUser').then((response) => {
            if (response.status === 200) {
                store.commit('storeUser', auth.getUser());
                next();
            } else {
                next('signin');
            }
        }).catch(() => {
            next('signin');
        });
    }
}



export const isAuthenticated = (to, from, next) => {
    auth.userExists() ? next('/') : next();
}
