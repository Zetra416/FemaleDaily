const defaultState = {
  trendingData : []
}

export default function trendingReducer (state= defaultState, action) {
  switch (action.type) {
    case "GET_TRENDING":
      return {...state, trendingData: action.payload};
    default:
      return state;
  }
}
