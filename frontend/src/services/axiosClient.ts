import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    // let Storage: any = localStorage.getItem('user');
    // let store = JSON.parse(Storage);
    // if (store) {
    //   config.headers.Authorization = 'Bearer ' + store.token;
    // }
    return config;
  },
  function (error: AxiosError) {
    return Promise.reject(error);
  }
);

axiosClient.interceptors.response.use(
  function (response: AxiosResponse) {
    return response.data;
  },
  function (error: AxiosError) {
    if(error.response?.status === 401) {
      return Promise.reject(error.response.data)
    }
    return Promise.reject(error);
  }
);

export default axiosClient;