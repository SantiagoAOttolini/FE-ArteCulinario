import * as types from '../_actions/types'

const INITIAL_STATE = {
  products: []
}

export default function(state = INITIAL_STATE, action) {
  switch (action.type) {
    case types.FETCH_PRODUCTS:
      return {
        ...state,
        products: action.payload.map(product => ({
          ...product,
          compare: false
        }))
      }
    case types.COMPARE_PRODUCT:
      return {
        ...state,
        products: state.products.map(product =>
          product._id === action.product._id
            ? { ...product, compare: !product.compare }
            : product
        )
      }
    default:
      return state
  }
}
