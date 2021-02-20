import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class LeaderBoard extends React.Component {
    static propTypes = {
        users: PropTypes.array.isRequired,
    }

    render() {
        const { users } = this.props
        return (
            users.length > 0 &&
            <ul className="card leaderbord">
                <h1 className="header">Leaderboard</h1>
                {
                    users.map((user) => (
                        <li className="small-card" key={user.id}>
                            <img className="board-avatar" src={user.avatarURL} alt="User's Profile" />
                            <div className="middle">
                                <div className="row">
                                    <h2>{user.name}</h2>
                                </div>
                                <div className="row">
                                    <p>Answered questions</p>
                                    <p>{Object.keys(user.answers).length}</p>
                                </div>
                                <div className="row">
                                    <p>Created questions</p>
                                    <p>{user.questions.length}</p>
                                </div>
                            </div>
                            <div className="score-container">
                                <p>Score</p>
                                <h3 className="score">{user.questions.length + Object.keys(user.answers).length}</h3>
                            </div>
                        </li>
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
