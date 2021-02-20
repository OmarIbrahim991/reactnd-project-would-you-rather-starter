import PropTypes from 'prop-types'
import Question from './Question'

const QuestionsList = ({ questions }) => (
    questions.length > 0 &&
    <ul id="questions-list">
        {
            questions.map((question) => (
                <Question key={question.id} id={question.id} />
            ))
        }
    </ul>
)

QuestionsList.propTypes = {
    questions: PropTypes.array.isRequired,
}

export default QuestionsList
