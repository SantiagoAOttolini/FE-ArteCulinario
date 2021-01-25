import { FETCH_REWARDS, FILTER_REWARDS_BY_CATEGORY } from './types'

export const fetchRewards = () => dispatch => {
  fetch('http://localhost:5000/api/Gastronomy/')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_REWARDS, payload: data })
    })
}

export const filterRewardsByCategory = (rewards, category) => dispatch => {
  return dispatch({
    type: FILTER_REWARDS_BY_CATEGORY,
    payload: {
      Category: category,
      items:
        category === ''
          ? rewards
          : rewards.filter(a => a.Category.indexOf(category) >= 0)
    }
  })
}