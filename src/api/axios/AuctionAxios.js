import axios from "axios";
import { ACCESS_TOKEN } from "../../constants";

const auctionApi = axios.create({
  baseURL: process.env.REACT_APP_AUCTION_API_URL,
});

auctionApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem(ACCESS_TOKEN);
    if (token !== "undefined" && token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error),
);

export default auctionApi;
