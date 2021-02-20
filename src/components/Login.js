import React from 'react'
import PropTypes from 'prop-types'
import { handleLoginUser } from '../actions/currentUser'

class Login extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired,
        usersIds: PropTypes.array.isRequired,
    }

    state = { value: "" }

    handleChange = e => this.setState({ value: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleLoginUser(this.state.value))
    }

    render() {
        const { users, usersIds } = this.props

        return (
            <div id="login-page">
                {
                    <form className="login-form" onSubmit={this.handleSubmit}>
                        <div className="headers">
                            <h1 className="header">Would You Rather App</h1>
                            <h2 className="header">Login Page</h2>
                        </div>

                        <img className="logo" src="/logo512.png" alt="logo" />

                        <select className="select-user" value={this.state.value} onChange={this.handleChange}>
                            <option value="" disabled hidden>Select a user to login</option>
                            {
                                usersIds.map((userId) => (
                                    <option key={userId} value={userId}>
                                        {users[userId].name}
                                    </option>
                                ))
                            }   
                        </select>

                        <button className="btn-submit" disabled={this.state.value === ""}>Login</button>
                    </form>
                }
            </div>
        )
    }
}

export default Login
