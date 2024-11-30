import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from "axios";
import { BASE_URL, API_KEY } from "../configs/global";

const httpService = axios.create({
  baseURL: BASE_URL,
});

httpService.interceptors.request.use((config) => {
  const API_key = API_KEY;
  if (API_key) {
    config.headers.Authorization = `Bearer ${API_key}`;
    config.headers.Accept = "application/json";
  }
  return config;
});

httpService.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error?.response) {
      throw error.response?.data;
    }
  }
);

const baseApi = async <T>(
  url: string,
  options?: AxiosRequestConfig
): Promise<T> => {
  const response: AxiosResponse = await httpService(url, options);
  return response?.data as T;
};

const readData = async <T>(
  url: string,
  headers?: AxiosRequestHeaders
): Promise<T> => {
  const options: AxiosRequestConfig = {
    method: "GET",
    headers: headers,
  };

  return await baseApi<T>(url, options);
};

export { readData };
