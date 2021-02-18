import Question from "./Question"

const QuestionsList = ({ questions }) => (
    <ul>
        {
            questions.map((question) => (
                <Question key={question.id} id={question.id} />
            ))
        }
    </ul>
)

export default QuestionsList
