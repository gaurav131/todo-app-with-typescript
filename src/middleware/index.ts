import logger from "./logger";
import checker from "./checker";
import {applyMiddleware} from "redux";
import ReduxThunk from 'redux-thunk'

export default applyMiddleware(ReduxThunk, checker, logger)
