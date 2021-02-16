export const LOGIN_USER = "LOGIN_USER"

const loginUser = (userId) => ({
    type: LOGIN_USER,
    userId,
})

export const handleLoginUser = (userId) => (dispatch, getState) => {
    const { users } = getState()
    users[userId] ? dispatch(loginUser(userId)) : alert("User is not registered.")
}
