import { useState, useEffect } from "react";

export function ThemeSwitcher() {
	const [theme, setTheme] = useState(() => {
		// Check if a theme is already saved in localStorage
		return localStorage.getItem("theme") || "light";
	});

	useEffect(() => {
		// Apply the theme class to the `html` element
		const root = document.documentElement;
		if (theme === "dark") {
			root.classList.add("dark");
		} else {
			root.classList.remove("dark");
		}
		// Save the theme to localStorage
		localStorage.setItem("theme", theme);
	}, [theme]);

	// Toggle between light and dark themes
	const toggleTheme = () => {
		setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
	};

	return (
		<button
			onClick={toggleTheme}
			className="p-2 border rounded bg-gray-200 dark:bg-gray-800 dark:text-white"
		>
			Toggle {theme === "light" ? "Dark" : "Light"} Mode
		</button>
	);
}
