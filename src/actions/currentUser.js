export const LOGIN_USER = "LOGIN_USER"

const loginUser = (username) => ({
    type: LOGIN_USER,
    username,
})

export const handleLoginUser = (username) => (dispatch, getState) => {
    const { users } = getState()
    users[username] ? dispatch(loginUser(username)) : alert("Username is not registered.")
}
