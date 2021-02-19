import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'

class Home extends React.Component {
    state = { showAnswered: false }
    render() {
        const { unAnsweredQuestions, answeredQuestions } = this.props

        return (
            <div className="card">
                <div className="btns-container">
                    <button className={this.state.showAnswered ? "btn-active" : "btn"} onClick={() => this.setState({ showAnswered: false })}>
                        Unanswered
                    </button>
                    <button className={!this.state.showAnswered ? "btn-active" : "btn"} onClick={() => this.setState({ showAnswered: true })}>
                        Answered
                    </button>
                </div>
                <QuestionsList questions={this.state.showAnswered ? answeredQuestions : unAnsweredQuestions} />
            </div>
        )
    }
}

const mapStateToProps = ({ questions, currentUser }) => {
    const unAnsweredQuestions = Object.values(questions)
        .filter(q => !(q.optionOne.votes.includes(currentUser) || q.optionTwo.votes.includes(currentUser)))
        .sort((a, b) => b.timestamp - a.timestamp)
    const answeredQuestions = Object.values(questions)
        .filter(q => (q.optionOne.votes.includes(currentUser) || q.optionTwo.votes.includes(currentUser)))
        .sort((a, b) => b.timestamp - a.timestamp)

    return {
        unAnsweredQuestions,
        answeredQuestions,
    }
}

export default connect(mapStateToProps)(Home)
