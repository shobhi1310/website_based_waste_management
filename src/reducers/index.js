import isLoggedReducer from './isLogged'
import userReducer from './user'
import {combineReducers} from 'redux'

const allReducers = combineReducers({
    isLogged: isLoggedReducer,
    userId: userReducer
})

export default allReducers