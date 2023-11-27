const useApi = (apiUrl) => {
  const handleResponse = (response) => {
    if (response.ok) {
      return response
    }
    return Promise.reject(`Error (handleResponse): ${response.status}`)
  }
  const getIngredientList = async () => {
    return fetch(apiUrl, {
      method: 'GET',
    })
    .then(handleResponse)
    .then(response => {
      if (response.ok) {
          return response.json()
      }
      return Promise.reject(`Error (handleResponse): ${response.status}`);
  })
  };
  return {getIngredientList}
}
export default useApi;