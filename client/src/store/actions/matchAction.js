export function getMatch(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then( matches => {
      dispatch({
        type: 'GET_MATCH',
        payload: Object.values(matches)[0]
      })
    })
    .catch(err => {
      console.log(err, 'failed to fetch matches data');
    })
  }
}
