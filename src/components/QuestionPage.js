import React from 'react'
import { connect } from 'react-redux'
import { handleAnswerQuestion } from '../actions/questions'
import NotFound from './NotFound'
import Loading from './Loading'

class QuestionPage extends React.Component {
    state = { selected: "", loading: false }

    handleChange = e => this.setState({ selected: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAnswerQuestion({
            questionId: this.props.question.id,
            userId: this.props.currentUser,
            answer: this.state.selected
        }, () => this.setState({ loading: false })))
        this.setState({ selected: "", loading: true })
    }

    render() {
        const { question, authorData, answered } = this.props

        if(!question) { return <NotFound message="Question doesn't exist." /> }

        if (this.state.loading) { return <Loading /> }

        if (answered) {
            return (
                <div>
                    Answered
                </div>
            )
        }

        return (
            <form className="question-card" onSubmit={this.handleSubmit}>
                <img className="question-card-avatar" src={authorData.avatarURL} alt="User's Profile" />
                <div className="question-card-desc">
                    <p>{authorData.name} asks:</p>
                    <h2>Would You Rather...</h2>
                    <label>
                        <input onChange={this.handleChange} value="optionOne" type="radio" checked={this.state.selected === "optionOne"} />
                        {question.optionOne.text}
                    </label>
                    <label>
                        <input onChange={this.handleChange} value="optionTwo" type="radio" checked={this.state.selected === "optionTwo"} />
                        {question.optionTwo.text}
                    </label>
                    <button className="btn-card" disabled={this.state.selected === ""}>Submit</button>
                </div>
            </form>
        )
    }
}

const mapStateToProps = ({ currentUser, questions, users }, props) => {
    const id = props.match.params.id
    const question = questions[id]
    const authorData = users[question.author]

    return {
        currentUser,
        question,
        authorData,
        answered: question != null && (question.optionOne.votes.includes(currentUser) || question.optionTwo.votes.includes(currentUser)),
    }
}

export default connect(mapStateToProps)(QuestionPage)
