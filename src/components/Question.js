import React from 'react'
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'

class Question extends React.Component {
    handleClick = () => this.props.history.push(`/question/${this.props.id}`)

    render() {
        const { userData, question } = this.props

        return (
            <div className="small-card">
                <img className="user-avatar-question" src={userData.avatarURL} alt="User's profile" />
                <div className="question-desc">
                    <h3>{userData.name} asks:<br />Would you rather</h3>
                    <p>{question.optionOne.text} <br />or</p>
                    <button className="btn-card" onClick={this.handleClick}>View Poll</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ users, questions }, { id }) => ({
    question: questions[id],
    userData: users[questions[id].author],
})

export default withRouter(connect(mapStateToProps)(Question))
