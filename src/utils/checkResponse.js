export const checkResponse = (response) => {
    if (!response.ok) {
        return Promise.reject(`Error (checkResponse): ${response.status}`);
    } else {
        return response.json()
    }
}