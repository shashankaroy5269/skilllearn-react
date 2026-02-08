import axios from "axios";

export const baseURL = "https://sdlc-3.vercel.app/api";

const AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

// AxiosInstance.interceptors.request.use(
//   (config) => {
//     const token = localStorage.getItem("token");

//     if (token) {
      
//       config.headers.Authorization = token;
//     }

//     return config;
//   },
//   (error) => Promise.reject(error)
// );

export default AxiosInstance;
