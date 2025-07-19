// lib/axiosInstance.js or utils/axiosInstance.js

import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_BACKENDURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});
