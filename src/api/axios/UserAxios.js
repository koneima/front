import axios from "axios";
import { ACCESS_TOKEN } from "../../constants";

const userApi = axios.create({
  baseURL: process.env.REACT_APP_USER_API_URL,
});

userApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token !== "undefined" && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default userApi;
