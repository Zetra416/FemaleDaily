const defaultState = {
  reviewData : []
}

export default function reviewReducer (state = defaultState, action) {
  switch (action.type) {
    case "GET_REVIEW":
      return {...state, reviewData: action.payload};
    default:
      return state;
  }
}
