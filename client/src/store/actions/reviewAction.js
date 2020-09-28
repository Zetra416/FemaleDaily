export function getReview(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(reviews => {
    dispatch({
      type: 'GET_REVIEW',
      payload: Object.values(reviews)[2]
      })
    })
    .catch(err => {
      console.log(err, 'failed to fetch editors choices');
    })
  }
}
