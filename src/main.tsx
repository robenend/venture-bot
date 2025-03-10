import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { ThemeProvider } from "./layout/theme-provider";
import { router } from "./layout/router";
import AuthProvider from "./context/AuthProvider";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			<AuthProvider>
				<RouterProvider router={router} />
			</AuthProvider>
			<Toaster />
		</ThemeProvider>
	</React.StrictMode>
);
