export function getChoice(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(choices => {
    dispatch({
      type: 'GET_CHOICE',
      payload: Object.values(choices)[0]
      })
    })
    .catch(err => {
      console.log(err, 'failed to fetch editors choices');
    })
  }
}
