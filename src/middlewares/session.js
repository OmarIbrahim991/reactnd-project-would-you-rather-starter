import { LOGIN_USER, LOGOUT } from "../actions/currentUser"

const session = (store) => (next) => (action) => {
    if (action.type === LOGIN_USER) {
        localStorage.setItem("currentUser", action.userId)
    }
    else if (action.type === LOGOUT) {
        localStorage.removeItem("currentUser")
    }
    next(action)
}

export default session
