import { Link } from "react-router-dom"
import PropTypes from 'prop-types'

const NotFound = ({ message }) => (
    <div className="container">
        <h1 className="header">{message ? message : "Page Not Found 404."}</h1>
        <h2 className="header"><Link to="/">Return to Home Page</Link></h2>
    </div>
)

NotFound.propTypes = {
    message: PropTypes.string,
}

export default NotFound
