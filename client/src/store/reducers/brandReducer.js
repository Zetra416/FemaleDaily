const defaultState = {
  brandData : []
}

export default function brandReducer(state= defaultState,action) {
  switch (action.type) {
    case "GET_BRAND":
      return {...state, brandData: action.payload}
    default:
      return state;
  }
}
