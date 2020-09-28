const defaultState = {
  matchData : []
}

export default function matchReducer (state=defaultState, action) {
  switch (action.type) {
    case "GET_MATCH":
      return {...state, matchData: action.payload};
    default:
      return state;
  }
}
