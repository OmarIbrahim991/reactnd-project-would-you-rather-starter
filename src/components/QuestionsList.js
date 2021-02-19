import Question from "./Question"

const QuestionsList = ({ questions }) => (
    <ul id="questions-list">
        {
            questions.map((question) => (
                <Question key={question.id} id={question.id} />
            ))
        }
    </ul>
)

export default QuestionsList
