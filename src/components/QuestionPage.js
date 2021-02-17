import React from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'

class QuestionPage extends React.Component {
    state = { selected: "" }

    handleChange = e => this.setState({ selected: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAnswerQuestion({
            questionId: this.props.id,
            userId: this.props.currentUser,
            answer: this.state.selected
        }))
        this.setState({ selected: "" })
    }

    render() {
        const { question, answered } = this.props

        if(!question) {
            return (
                <div>
                    This question no longer exists.
                </div>
            )
        }

        if (answered) {
            return (
                <div>Answered</div>
            )
        }

        return (
            <form onSubmit={this.handleSubmit}>
                <label htmlFor="one">
                    <input onChange={this.handleChange} value="optionOne" type="radio" checked={this.state.selected === "optionOne"} />
                    {question.optionOne.text}
                </label>
                <label>
                    <input onChange={this.handleChange} value="optionTwo" type="radio" checked={this.state.selected === "optionTwo"} />
                    {question.optionTwo.text}
                </label>
                <button>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = ({ currentUser, questions, users }, props) => {
    const id = props.match.params.id
    const question = questions[id]

    return {
        users,
        currentUser,
        question,
        answered: question && (question.optionOne.votes.includes(currentUser) || question.optionTwo.votes.includes(currentUser)),
    }
}

export default connect(mapStateToProps)(QuestionPage)