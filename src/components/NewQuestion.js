import React from 'react'
import { connect } from "react-redux"
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types'
import { handleAddQuestion } from '../actions/questions'
import Loading from './Loading'

class NewQuestion extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        history: PropTypes.object.isRequired,
        author: PropTypes.object.isRequired,
    }

    state = {
        optionOne: "",
        optionTwo: "",
        loading: false
    }

    handleChange = e => this.setState({ [ e.target.name==="two" ? "optionTwo" : "optionOne" ]: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddQuestion({
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
            author: this.props.author.id,
        }, () => this.props.history.push("/")))
        this.setState({
            optionOne: "",
            optionTwo: "",
            loading: true,
        })
    }

    isDisabled = () => this.state.optionOne === "" || this.state.optionTwo === ""

    render() {
        if (this.state.loading) { return <Loading /> }

        return (
            <form className="create-form" onSubmit={this.handleSubmit}>
                <h1 className="header">Create New Question</h1>
                <h2>Would you rather:</h2>
                <input type="text" name="one" value={this.state.optionOne} onChange={this.handleChange} placeholder="Enter Option One"/>
                <h3>OR</h3>
                <input type="text" name="two" value={this.state.optionTwo} onChange={this.handleChange} placeholder="Enter Option Two"/>
                <button className="btn-card" disabled={this.isDisabled()}>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = ({ currentUser, users }) => ({
    author: users[currentUser]
})

export default withRouter(connect(mapStateToProps)(NewQuestion))
