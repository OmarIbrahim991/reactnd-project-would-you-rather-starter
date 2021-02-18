import { applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import logger from './logger'
import session from './session'

export default applyMiddleware(thunk, session, logger)
