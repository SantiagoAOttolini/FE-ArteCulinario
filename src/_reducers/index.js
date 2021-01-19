import { combineReducers } from 'redux'
import user from './user_reducer'
import product from './productReducer'
import analyzer from './analyzerReducer'
import Reward from './rewardsReducer'

const rootReducer = combineReducers({
  user,
  product,
  analyzer,
  Reward
})

export default rootReducer
