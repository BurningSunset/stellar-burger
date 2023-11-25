import { useState } from 'react';
const useApi = (apiUrl) => {
  const [error, setError] = useState(null);
  const handleResponse = (response) => {
    if (response.ok) {
      return response.json()
    }
      setError(`Error (handleResponse): ${response.status}`)
      return Promise.reject(`Error (handleResponse): ${response.status}`)
  }
  const getIngredientList = async () => {
    try {
      const response = await fetch(apiUrl, {
        method: 'GET'
      });
      const data = await handleResponse(response);
      if (data && data.data) {
        return data;
      } else {
        setError(`Error (getIngredientList): Invalid data structure`);
        return Promise.reject(`Error (getIngredientList): Invalid data structure`);
      }
        } catch (error) {
            setError(`Error (getIngredientList): ${error.message}`);
            return Promise.reject(`Error (getIngredientList): ${error.message}`);
        }
          };
      return { getIngredientList, error };
    }
export default useApi;
