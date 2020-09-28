export function getBrand(url) {
  return(dispatch) => {
    fetch(url)
    .then(res => res.json())
    .then(brands => {
      dispatch({
        type: "GET_BRAND",
        payload: Object.values(brands)[0]
      })
    })
    .catch(err => {
      console.log(err, 'failed to fetch brand data');
    })
  }
}
