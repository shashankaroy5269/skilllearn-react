import axios from "axios";

export const baseURL = "https://sdlc-3.vercel.app/api";

const AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
});

export default AxiosInstance;
