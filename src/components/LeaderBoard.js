import React from 'react'
import { connect } from 'react-redux'

class LeaderBoard extends React.Component {
    render() {
        const { users } = this.props
        return (
            <ul>
                {
                    users.map((user) => (
                        <li key={user.id}>{`${user.name}: ${user.questions.length + Object.keys(user.answers).length}`}</li>
                    ))
                }
            </ul>
        )
    }
}

const mapStateToProps = ({ users }) => ({
    users: Object.values(users).sort((a,b) => {
        return b.questions.length + Object.keys(b.answers).length - a.questions.length - Object.keys(a.answers).length
    })
})

export default connect(mapStateToProps)(LeaderBoard)
