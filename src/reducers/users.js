import { RECEIVE_USERS } from '../actions/users'
import { ADD_QUESTION, ANSWER_QUESTION } from '../actions/questions'

const users = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_USERS:
            return { ...state, ...action.users }
        case ADD_QUESTION:
            const { author, id } = action.question
            return {
                ...state,
                [author]: { ...state[author], questions: [...state[author].questions, id] }
            }
        case ANSWER_QUESTION:
            const { questionId, userId, answer } = action
            return {
                ...state,
                [userId]: {
                    ...state[userId],
                    answers: { ...state[userId].answers, [questionId]: answer }
                }
            }
        default:
            return state
    }
}

export default users
