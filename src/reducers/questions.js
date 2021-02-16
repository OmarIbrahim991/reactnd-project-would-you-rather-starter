import { ADD_QUESTION, ANSWER_QUESTION, RECEIVE_QUESTIONS } from '../actions/questions'

const questions = (state={}, action) => {
    switch (action.type) {
        case RECEIVE_QUESTIONS:
            return { ...state, ...action.questions }
        case ADD_QUESTION:
            return { ...state, [action.question.id]: action.question }
        case ANSWER_QUESTION:
            const { questionId, userId, answer } = action
            return {
                ...state,
                [questionId]: {
                    ...state[questionId],
                    [answer]: { ...state[questionId][answer], votes: [...state[questionId][answer].votes, userId] }
                }
            }
        default:
            return state
    }
}

export default questions
