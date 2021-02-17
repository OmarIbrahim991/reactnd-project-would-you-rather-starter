import { LOGIN_USER, LOGOUT } from '../actions/currentUser'

const currentUser = (state=null, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.userId
        case LOGOUT:
            return null
        default:
            return state
    }
}

export default currentUser
