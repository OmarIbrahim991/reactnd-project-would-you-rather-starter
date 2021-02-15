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
        return (
            <div id="login-page">
                {
                    Object.keys(this.props.users).length !== 0 &&
                    <form onSubmit={this.handleSubmit}>
                        <h1>Login Page</h1>
                        <select value={this.state.value} onChange={this.handleChange}>
                            <option value="" disabled hidden>Select a user to login...</option>
                            {
                                Object.keys(this.props.users).map((user) => (
                                    <option key={user} value={user}>{user}</option>
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

const mapStateToProps = ({ users }) => ({ users })

export default connect(mapStateToProps)(Login)
