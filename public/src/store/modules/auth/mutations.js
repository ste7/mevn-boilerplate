import { getUser } from '../../../helper/auth'


export const setUser = (state, user) => {
    state.user.data = user;
    state.user.authenticated = true;
}


export const removeUser = (state) => {
    state.user.authenticated = false;
    state.user.data = null;
}
