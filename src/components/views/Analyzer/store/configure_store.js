import { createStore } from 'redux'
import { rootReducer } from '../../../../_reducers'

export function configureStore() {
  return createStore(rootReducer)
}