import React from 'react'
import { connect } from 'react-redux'
import QuestionsList from './QuestionsList'

class Home extends React.Component {
    state = { showAnswered: false }
    render() {
        const { unAnsweredQuestions, answeredQuestions } = this.props

        return (
            <div>
                <button onClick={() => this.setState({ showAnswered: false })}>Unanswered</button>
                <button onClick={() => this.setState({ showAnswered: true })}>Answered</button>
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
