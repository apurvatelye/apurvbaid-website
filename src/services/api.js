import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL,
});

// Request interceptor
api.interceptors.request.use(
    (config) => {

        const token = localStorage.getItem("admin_token");

        // Admin requests ke liye JWT
        if (token) {
            config.headers.Authorization = `Bearer ${token}`;
        }

        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

// Response interceptor
api.interceptors.response.use(
    (response) => response,

    (error) => {

        if (error.response?.status === 401) {

            localStorage.removeItem("admin_token");
            localStorage.removeItem("admin_email");
            localStorage.removeItem("admin_role");
            localStorage.removeItem("admin_authenticated");

            window.location.href = "/";
        }

        return Promise.reject(error);
    }
);

export default api;