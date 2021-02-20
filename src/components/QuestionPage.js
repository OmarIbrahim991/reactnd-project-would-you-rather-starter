import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { handleAnswerQuestion } from '../actions/questions'
import NotFound from './NotFound'
import Loading from './Loading'

class QuestionPage extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        question: PropTypes.object.isRequired,
        authorData: PropTypes.object.isRequired,
        answered: PropTypes.bool.isRequired,
        currentUser: PropTypes.string.isRequired,
    }

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
        const { question, authorData, answered, currentUser } = this.props

        if(!question) { return <NotFound message="Question doesn't exist." /> }

        const votes1 = question.optionOne.votes.length
        const votes2 = question.optionTwo.votes.length

        if (this.state.loading) { return <Loading /> }

        if (answered) {
            return (
                <div className="answered-container">
                    <h3 className="answered-header">Asked by {authorData.name}</h3>
                    <div className="answered-question">
                        <img className="answered-avatar" src={authorData.avatarURL} alt="User's Profile" />
                        <div className="answered-desc">
                            <h2>Results:</h2>
                            <div className={`answer-option${question.optionOne.votes.includes(currentUser) ? " active" : ""}`}>
                                <p className={question.optionOne.votes.includes(currentUser) ? "vote-active" : "vote"}>&#10004;</p>
                                <p>Would you rather {question.optionOne.text}?</p>
                                <div className="bar">
                                    {
                                        votes1 > 0 &&
                                        <span className="filled" style={{ width: `${Math.round(100*votes1/(votes1+votes2))}%`}}>
                                            {Math.round(100*votes1/(votes1+votes2)) + "%"}
                                        </span>
                                    }
                                </div>
                                <p>{`${votes1} out of ${votes1+votes2} votes`}</p>
                            </div>
                            <div className={`answer-option${question.optionTwo.votes.includes(currentUser) ? " active" : ""}`}>
                                <p className={question.optionTwo.votes.includes(currentUser) ? "vote-active" : "vote"}>&#10004;</p>
                                <p>Would you rather {question.optionTwo.text}?</p>
                                <div className="bar">
                                    {
                                        votes2 > 0 &&
                                        <span className="filled" style={{ width: `${Math.round(100*votes2/(votes1+votes2))}%`}}>
                                            {Math.round(100*votes2/(votes1+votes2)) + "%"}
                                        </span>
                                    }
                                </div>
                                <p>{`${votes2} out of ${votes1+votes2} votes`}</p>
                            </div>
                        </div>
                    </div>
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
    const authorData = question ? users[question.author] : {}

    return {
        currentUser,
        question,
        authorData,
        answered: question != null && (question.optionOne.votes.includes(currentUser) || question.optionTwo.votes.includes(currentUser)),
    }
}

export default connect(mapStateToProps)(QuestionPage)
