import { _getQuestions, _getUsers } from '../utils/_DATA'
import { receiveQuestions } from './questions'
import { receiveUsers } from './users'

export const handleInitialData = () => (dispatch)=> {
    Promise.all([_getUsers(), _getQuestions()])
    .then(([users, questions]) => {
        dispatch(receiveUsers(users))
        dispatch(receiveQuestions(questions))
    })
}
