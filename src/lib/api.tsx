import axios from "axios";

const api = axios.create({
	baseURL: "http://localhost:5000", // Backend URL
	withCredentials: true, // If using cookies for auth (optional)
});

// Add a request interceptor to attach the token
api.interceptors.request.use((config) => {
	const token = localStorage.getItem("token");
	if (token) {
		config.headers.Authorization = `Bearer ${token}`;
	}
	return config;
});

export default api;
