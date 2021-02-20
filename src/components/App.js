import React from 'react'
import { connect } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import PropTypes from 'prop-types'
import { handleInitialData } from '../actions/shared'
import { logout } from '../actions/currentUser'
import Login from './Login'
import Home from './Home'
import NewQuestion from './NewQuestion'
import LeaderBoard from './LeaderBoard'
import QuestionPage from './QuestionPage'
import Nav from './Nav'
import Loading from './Loading'
import NotFound from './NotFound'

class App extends React.Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        users: PropTypes.object.isRequired,
        currentUser: PropTypes.string,
    }

    componentDidMount() { this.props.dispatch(handleInitialData()) }

    render() {
        const { currentUser, users, dispatch } = this.props
        const usersIds = Object.keys(users)

        if (currentUser === null) {
            return usersIds.length > 0 ? <Login usersIds={usersIds} users={users} dispatch={dispatch} /> : <Loading />
        }

        return (
            <Router>
                <Nav userData={users[currentUser]} logout={() => dispatch(logout())} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/new" component={NewQuestion} />
                    <Route path="/leaderboard" component={LeaderBoard} />
                    <Route path="/question/:id" component={QuestionPage} />
                    <Route component={NotFound} />
                </Switch>
            </Router>
        )
    }
}

const mapStateToProps = ({ currentUser, users }) => ({ currentUser, users })

export default connect(mapStateToProps)(App)
