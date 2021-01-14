import { INIT_BMR, MODIFY_BMR } from './types'

export function initializeBmr(bmr) {
  return {
    type: INIT_BMR,
    data: bmr
  }
}

export function modifyBmr(bmr) {
  return {
    type: MODIFY_BMR,
    data: bmr
  }
}