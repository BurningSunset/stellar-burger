export const checkResponse = (response: Response): Promise<any> => {
    if (!response.ok) {
        return Promise.reject(new Error(`Error (checkResponse): ${response.status}`));
    } else {
        return response.json()
    }
}