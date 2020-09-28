export function getTrending(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(trendings => {
      dispatch({
        type: 'GET_TRENDING',
        payload: Object.values(trendings)[0]
      })
    })
    .catch(err => {
      console.log(err, 'failed to fetch trending data');
    })
  }
}
