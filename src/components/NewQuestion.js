import React from 'react'
import { connect } from "react-redux"
import { handleAddQuestion } from '../actions/questions'

class NewQuestion extends React.Component {
    state = {
        optionOne: "",
        optionTwo: "",
    }

    handleChange = e => this.setState({ [ e.target.name==="two" ? "optionTwo" : "optionOne" ]: e.target.value })

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.dispatch(handleAddQuestion({
            optionOneText: this.state.optionOne,
            optionTwoText: this.state.optionTwo,
            author: this.props.author.id,
        }))
        this.setState({
            optionOne: "",
            optionTwo: "",
        })
    }

    isDisabled = () => this.state.optionOne === "" || this.state.optionTwo === ""

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <input type="text" name="one" value={this.state.optionOne} onChange={this.handleChange} placeholder="Enter Option One"/>
                <input type="text" name="two" value={this.state.optionTwo} onChange={this.handleChange} placeholder="Enter Option Two"/>
                <button disabled={this.isDisabled()}>Submit</button>
            </form>
        )
    }
}

const mapStateToProps = ({ currentUser, users }) => ({
    author: users[currentUser]
})

export default connect(mapStateToProps)(NewQuestion)
