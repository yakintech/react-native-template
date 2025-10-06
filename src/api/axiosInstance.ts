import axios from "axios";
import storageHelper from "../utils/storage/storageHelper";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/api",
  headers: {
    "Content-Type": "application/json",
  },
});


axiosInstance.interceptors.request.use( async (config) => {
  const token = await storageHelper.getData("authToken");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axiosInstance;