export const LOGIN_USER = "LOGIN_USER"
export const LOGOUT = "LOGOUT"

const loginUser = (userId) => ({
    type: LOGIN_USER,
    userId,
})

export const handleLoginUser = (userId) => (dispatch, getState) => {
    const { users } = getState()
    users[userId] ? dispatch(loginUser(userId)) : alert("User is not registered.")
}

export const logout = () => ({
    type: LOGOUT,
})
