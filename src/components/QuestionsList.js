import Question from "./Question"

const QuestionsList = ({ questions }) => (
    <ul>
        {
            questions.map((question) => (
                <Question key={question.id} id={question.id} style={{ border: "1px solid #111" }} />
            ))
        }
    </ul>
)

export default QuestionsList
