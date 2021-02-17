import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'

class App extends React.Component{
    componentDidMount() { this.props.dispatch(handleInitialData()) }

    render() {
        const { currentUser } = this.props

        if (currentUser === null) { return <Login /> }

        return (
            <div className="container">
                {
                    <Router>
                        <Route exact path="/" component={Home} />
                        <Route path="/new" component={NewQuestion} />
                        <Route path="/question/:id" component={QuestionPage} />
                        <Route path="/leaderboard" component={LeaderBoard} />
                    </Router>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ currentUser }) => ({ currentUser })

export default connect(mapStateToProps)(App)
