import axios, { AxiosError, AxiosRequestConfig, AxiosResponse } from "axios";

const axiosClient = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  }
});

axiosClient.interceptors.request.use(
  function (config: AxiosRequestConfig) {
    if(!config.headers) config.headers =  {};
    const token = localStorage.getItem('token');
    config.headers.Authorization =  token ? `Bearer ${token}` : '';
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
    if(error.response?.status === 401 || error.response?.status === 422) {
      return Promise.reject(error.response.data)
    }
    return Promise.reject(error);
  }
);

export default axiosClient;