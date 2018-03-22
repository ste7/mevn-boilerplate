export const isAuthenticated = (state) => {
    return state.user.authenticated;
}


export const getUser = (state) => {
    return state.user.data;
}
