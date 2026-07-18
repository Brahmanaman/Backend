import axios from "axios"
import { API_URL } from "../utils/env"

const api = axios.create({
    baseURL: API_URL,
    withCredentials: true, //for sending cookies with requests
    headers: {
        "Content-Type": "application/json",
    },
})

api.interceptors.response.use(
    response => response,
    async (error) => {
        const originalRequest = error?.config;
        const errorMessage = error.response?.data?.message;
        const errorSuccess = error.response?.data?.success;
        const errorStatusCode = error.response?.status;

        if (errorMessage == "Access Token expired" && !errorSuccess && errorStatusCode == 401) {
            try {
                await axios.get(`${API_URL}/auth/refreshToken`, { withCredentials: true });
                return api(originalRequest);
            }
            catch (err) {
                return Promise.reject(err);
            }
        }
        return Promise.reject(error);
    }
)

export default api; 