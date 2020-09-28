const defaultState = {
  articleData : []
}

export default function articleReducer(state = defaultState, action) {
  switch (action.type) {
    case "GET_ARTICLE":
      return {...state, articleData: action.payload}
    default:
      return state;
  }
}
