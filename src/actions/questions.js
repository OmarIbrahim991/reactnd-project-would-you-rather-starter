import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA'

export const RECEIVE_QUESTIONS = "RECEIVE_QUESTIONS"
export const ADD_QUESTION = "ADD_QUESTION"
export const ANSWER_QUESTION = "ANSWER_QUESTION"

export const receiveQuestions = (questions) => ({
    type: RECEIVE_QUESTIONS,
    questions,
})

const addQuestion = (question) => ({
    type: ADD_QUESTION,
    question,
})

export const handleAddQuestion = (params) => (dispatch) => {
    _saveQuestion(params)
    .then(question => dispatch(addQuestion(question)))
    .catch(err => alert(err.message))
}

const answerQuestion = (questionId, userId, answer) =>({
    type: ANSWER_QUESTION,
    questionId,
    userId,
    answer,
})

export const handleAnswerQuestion = (params) => (dispatch) => {
    const { questionId, userId, answer } = params
    _saveQuestionAnswer({ authedUser: userId, qid: questionId, answer })
    .then(() => dispatch(answerQuestion(questionId, userId, answer)))
    .catch(err => alert(err.message))
}
