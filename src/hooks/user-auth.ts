import { useEffect, useState } from "react";
import axios from "axios";

export function useAuth() {
	const [user, setUser] = useState(null);
	const [loading, setLoading] = useState(true);

	useEffect(() => {
		const token = localStorage.getItem("token");
		if (!token) {
			setLoading(false);
			return;
		}

		axios
			.get("http://localhost:5000/auth/me", {
				headers: { Authorization: `Bearer ${token}` },
			})
			.then((res) => {
				setUser(res.data);
			})
			.catch(() => {
				// localStorage.removeItem("token"); // Clear token if invalid
			})
			.finally(() => setLoading(false));
	}, []);

	return { user, loading };
}
