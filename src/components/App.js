import React from 'react'
import { connect } from 'react-redux'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'

class App extends React.Component{
    componentDidMount() { this.props.dispatch(handleInitialData()) }

    render() {
        const { signedIn } = this.props

        return (
            <div className="container">
                {
                    !signedIn ?
                    <Login /> :
                    <Home />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ signedIn: currentUser !== null })

export default connect(mapStateToProps)(App)
