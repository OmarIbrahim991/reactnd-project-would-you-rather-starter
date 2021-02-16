import { LOGIN_USER } from '../actions/currentUser'

const currentUser = (state=null, action) => {
    switch (action.type) {
        case LOGIN_USER:
            return action.userId
        default:
            return state
    }
}

export default currentUser
