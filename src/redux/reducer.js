
import {combineReducers} from 'redux'

import homeData from './reducers/homeData'
import billboardData from './reducers/billboardData'
import gameData from './reducers/gameData'

const reducer = combineReducers({homeData,billboardData,gameData})

export default reducer
