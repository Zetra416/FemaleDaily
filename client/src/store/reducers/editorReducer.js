const defaultState = {
  editorData : []
}

export default function editorReducer (state= defaultState, action) {
  switch (action.type) {
    case "GET_CHOICE":
      return {...state, editorData: action.payload};
    default:
      return state;
  }
}
