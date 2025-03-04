import axios from "axios";
export const VITE_API_URL = import.meta.env.VITE_API_URL as string;

export const api = axios.create({
  baseURL: VITE_API_URL,
});

export default api;
