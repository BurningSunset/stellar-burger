import { useState } from 'react';
const useApi = (apiUrl) => {
  const [error, setError] = useState(null);
  const handleResponse = (response) => {
    if (response.ok) {
      return response.json()
    }
    setError(response.status)
  }
  const getIngredientList = async () => {
    const response = await fetch(apiUrl, {
      method: 'GET'
    });
    const data = await handleResponse(response);
    if (data && data.data) {
      return data;
    } else {
        setError(`Error (getIngredientList): Invalid data structure`);
    }
  };
  return {
    getIngredientList,
    error
  };
}
export default useApi;