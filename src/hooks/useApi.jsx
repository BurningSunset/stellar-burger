const useApi = (apiUrl) => {
  const getIngredientList = async () => {
    return fetch(apiUrl, {
      method: 'GET',
    })
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