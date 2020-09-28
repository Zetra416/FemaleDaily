export function getGroup(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(groups => {
      dispatch({
        type: "GET_GROUP",
        payload: Object.values(groups)[0]
      })
    })
    .catch(err=> {
      console.log(err, 'failed to fetch groups data');
    })
  }
}
