import React from 'react'
import { connect } from 'react-redux'
import { handleLoginUser } from '../actions/currentUser'

class Login extends React.Component {
    state = { value: "" }

    handleChange = e => this.setState({ value: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleLoginUser(this.state.value))
    }

    render() {
        const { users, usersIds, showForm } = this.props

        return (
            <div id="login-page">
                {
                    showForm &&
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login Page</h1>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="" disabled hidden>Select a user to login...</option>
                            {
                                usersIds.map((userId) => (
                                    <option key={userId} value={userId}>{users[userId].name}</option>
                                ))
                            }
                        </select>
                        <button>Login</button>
                    </form>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ users }) => {
    const usersIds = Object.keys(users)

    return {
        showForm: usersIds.length > 0,
        users,
        usersIds,
    }
}

export default connect(mapStateToProps)(Login)
