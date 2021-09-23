import { combineReducers } from 'redux'
import oantutiReducer from './oantutiReducer'
import BookingMovieReducer from './BookingMovieReducer'

const rootReducer = combineReducers({
    oantutiReducer,
    BookingMovieReducer
})

export default rootReducer