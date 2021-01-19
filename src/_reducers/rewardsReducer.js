import { FETCH_REWARDS, FILTER_REWARDS_BY_CATEGORY } from '../_actions/types'

const initialState = {
  items: [],
  filteredItems: [],
  Category: '',
  error: null,
  isLoading: false,
  message: undefined
}

export default function(state = initialState, action) {
  switch (action.type) {
    case FETCH_REWARDS:
      return {
        ...state,
        items: action.payload,
        filteredItems: action.payload
      }
    case FILTER_REWARDS_BY_CATEGORY:
      return {
        ...state,
        Category: action.payload.Category,
        filteredItems: action.payload.items
      }

    default:
      return state
  }
}
