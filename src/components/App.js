import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { handleInitialData } from '../actions/shared'
import { logout } from '../actions/currentUser'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import Nav from './Nav'

class App extends React.Component{
    componentDidMount() { this.props.dispatch(handleInitialData()) }

    render() {
        const { currentUser, users, dispatch } = this.props

        if (currentUser === null) { return <Login /> }

        return (
            <React.Fragment>
                {
                    <Router>
                        <Nav userData={users[currentUser]} logout={() => dispatch(logout())} />
                        <Switch>
                            <Route exact path="/" component={Home} />
                            <Route path="/new" component={NewQuestion} />
                            <Route path="/leaderboard" component={LeaderBoard} />
                            <Route path="/question/:id" component={QuestionPage} />
                            <Route render={() => <h1>Not Found 404!</h1>} />
                        </Switch>
                    </Router>
                }
            </React.Fragment>
        )
    }
}

const mapStateToProps = ({ currentUser, users }) => ({ currentUser, users })

export default connect(mapStateToProps)(App)
