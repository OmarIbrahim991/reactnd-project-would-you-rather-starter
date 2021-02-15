import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'

class App extends React.Component{
    componentDidMount() { this.props.dispatch(handleInitialData()) }

    render() {
        return (
            <div className="container">
                {
                    !this.props.signedIn ?
                    <Login /> :
                    <h1>Signed In</h1>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ signedIn: currentUser !== null })

export default connect(mapStateToProps)(App)
