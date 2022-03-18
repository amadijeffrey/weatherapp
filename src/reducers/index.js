import {combineReducers} from 'redux'
import weatherReducer from './reducer_fetchweather'


const allReducers = combineReducers({
    weather: weatherReducer
})

export default allReducers