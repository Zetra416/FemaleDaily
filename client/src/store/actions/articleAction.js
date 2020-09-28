export function getArticle(url) {
  return (dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then( articles => {
      dispatch({
        type: 'GET_ARTICLE',
        payload: Object.values(articles)[1]
      })
    })
    .catch(err => {
      console.log(err, 'failed to fetch latest article');
    })
  }
}
