import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'

const Nav = ({ userData, logout }) => (
    userData &&
    <nav className="nav">
        <ul className="nav-left">
            <li>
                <NavLink exact to="/" activeClassName="active">Home</NavLink>
            </li>
            <li>
                <NavLink to="/new" activeClassName="active">New</NavLink>
            </li>
            <li>
                <NavLink to="/leaderboard" activeClassName="active">LeaderBoard</NavLink>
            </li>
        </ul>
        <div className="nav-right">
            <img className="user-avatar" src={userData.avatarURL} alt="User's profile" />
            <p>{userData.name}</p>
            <button className="btn-logout" onClick={logout}>Logout</button>
        </div>
    </nav>
)

Nav.propTypes = {
    userData: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
}

export default Nav
