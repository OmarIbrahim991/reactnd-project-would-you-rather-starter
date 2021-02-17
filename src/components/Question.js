import React from 'react'
import { connect } from 'react-redux'

class Question extends React.Component {
    render() {
        const { users, questions, id } = this.props
        const question = questions[id]
        return (
            <div>
                <h3>{users[question.author].name}</h3>
                <p>{question.optionOne.text}</p>
                <p>{question.optionTwo.text}</p>
            </div>
        )
    }
}

const mapStateToProps = ({ users, questions }, { id }) => ({
    users,
    questions,
    id,
})

export default connect(mapStateToProps)(Question)
