const defaultState = {
  groupData: []
}

export default function groupReducer (state=defaultState, action) {
  switch (action.type) {
    case "GET_GROUP":
      return {...state, groupData: action.payload};
    default:
      return state;
  }
}
