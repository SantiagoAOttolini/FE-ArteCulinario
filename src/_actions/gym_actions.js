import { FETCH_GYM} from './types'

export const fetchGyms = () => dispatch => {
  fetch('http://localhost:5000/api/gyms/')
    .then(res => res.json())
    .then(data => {
      return dispatch({ type: FETCH_GYM, payload: data })
    })
}