import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

export default function LoginSuccess() {
	const navigate = useNavigate();
	const [searchParams] = useSearchParams();

	useEffect(() => {
		const token = searchParams.get("token");
		console.log("token", token);

		if (token) {
			localStorage.setItem("token", token);
			navigate("/"); // Redirect user after login
		}
	}, [navigate, searchParams]);

	return <p>Logging in...</p>;
}
