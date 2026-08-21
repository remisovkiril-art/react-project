import axios from "axios";

const API_URL = `${import.meta.env.VITE_PATH_TO_SERVER}${import.meta.env.VITE_PATH_TO_API}`;

export const $api = axios.create({
    baseURL: API_URL,
});
$api.interceptors.request.use((config) => {
    const token = localStorage.getItem("accessToken");
    if (token && config.headers) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});
