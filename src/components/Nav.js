import React from 'react'
import { connect } from 'react-redux'
import { NavLink } from 'react-router-dom'

class Nav extends React.Component {
    render() {
        return (
            <nav>
                <ul>
                    <li>
                        <NavLink exact to="/" activeClassName="active">Home</NavLink>
                    </li>
                    <li>
                        <NavLink to="/new" activeClassName="active">New</NavLink>
                    </li>
                    <li>
                        <NavLink to="/leaderboard" activeClassName="active">LeaderBoard</NavLink>
                    </li>
                </ul>
                <div>
                    <p>{this.props.userData.name}</p>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = ({ currentUser, users }) => ({
    userData: users[currentUser]
})

export default connect(mapStateToProps)(Nav)
