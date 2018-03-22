import * as auth from '../../../helper/auth'


export const storeUser = (state, user) => {
    state.user.authenticated = true;
    state.user.data = user;

    auth.storeUser(user);
}


export const removeUser = (state) => {
    state.user.authenticated = false;
    state.user.data = null;

    auth.removeUser();
}


export const storeUsers = (state, users) => {
    state.users = users;
}
