import api from "@/lib/api"; // Import the Axios instance

export const signInWithEmail = async (email: string, password: string) => {
	try {
		const res = await api.post("/auth/login", { email, password });

		// Store the token in localStorage
		localStorage.setItem("token", res.data.token);

		// Redirect to dashboard
		window.location.href = "/";
	} catch (error) {
		console.error("Login Error:", error);
	}
};
