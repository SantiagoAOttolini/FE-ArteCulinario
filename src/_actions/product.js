import * as types from '../_actions/types'
import axios from 'axios'
import { ADD_FOOD } from './types'

export const getProducts = () => dispatch =>
  fetch(`http://localhost:5000/api/food`)
    .then(response => response.json())
    .then(data => {
      dispatch({
        type: types.FETCH_PRODUCTS,
        payload: data
      })
    })

export const compare = product => ({
  type: types.COMPARE_PRODUCT,
  product
})

export function addFood(dataToSubmit) {
  const request = axios
    .post(`http://localhost:5000/api/admin/addFood`, dataToSubmit)
    .then(response => response.data)

  return {
    type: ADD_FOOD,
    payload: request
  }
}
