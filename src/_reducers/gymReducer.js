import { FETCH_GYM } from "../_actions/types";

const initialState = {
  items: [],
};

export default function (state = initialState, action) {
  switch (action.type) {
    case FETCH_GYM:
      return {
        ...state,
        items: action.payload,
      };
    default:
      return state;
  }
}
