import { URL } from "./apiConst";
import { TOptions } from "./types";

const checkResponse = async <T>(res: Response): Promise<T> => {
  return res.ok ? res.json() : Promise.reject(await res.json());
};

  export const refreshToken = async (): Promise<{success: boolean, refreshToken: string, accessToken: string}> => {
    const res = await fetch(`${URL}/auth/token`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json;charset=utf-8",
      },
      body: JSON.stringify({
        token: localStorage.getItem("refreshToken"),
      }),
    });
    return checkResponse(res);
  };
  
  export const fetchWithRefresh = async <T>(url: string, options: TOptions): Promise<T> => {
    try {
      const res = await fetch(url, options);
      return await checkResponse<T>(res);
    } catch (err: any) {
      if (err.message === "jwt expired") {
        const refreshData = await refreshToken(); //обновляем токен
        if (!refreshData.success) {
          return Promise.reject(refreshData);
        }
        localStorage.setItem("refreshToken", refreshData.refreshToken);
        localStorage.setItem("accessToken", refreshData.accessToken);
        options.headers.authorization = refreshData.accessToken;
        const res = await fetch(url, options); //повторяем запрос
        return await checkResponse<T>(res);
      } else {
        return Promise.reject(err);
      }
    }
  };