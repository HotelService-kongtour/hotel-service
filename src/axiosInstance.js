import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_BASE_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
    // Authorization: `Bearer ${localStorage.getItem("authToken")}`,
  },
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
