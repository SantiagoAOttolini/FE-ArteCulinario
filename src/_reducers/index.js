import { combineReducers } from 'redux'
import user from './user_reducer'
import product from './productReducer'
import analyzer from './analyzerReducer'

const rootReducer = combineReducers({
  user,
  product,
  analyzer
})

export default rootReducer
