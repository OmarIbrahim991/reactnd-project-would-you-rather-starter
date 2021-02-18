import { _getQuestions, _getUsers } from '../utils/_DATA'
import { handleLoginUser } from './currentUser'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export const handleInitialData = () => (dispatch)=> {
    Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
        const userId = localStorage.getItem("currentUser")
        if (userId) { dispatch(handleLoginUser(userId)) }
    })
}
