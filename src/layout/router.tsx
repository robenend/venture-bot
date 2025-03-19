import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "@/components/loader"; // Ensure the Loader component exists and is properly imported.

export const ROLES = {
	Admin: "admin",
	User: "user",
};

// Dynamically import RootLayout and Home
const Home = React.lazy(() => import("../pages/home"));
const Leaderboard = React.lazy(() => import("../pages/leaderboard"));
const Assistant = React.lazy(() => import("../pages/assistant"));
const Challeges = React.lazy(() => import("../pages/challenge"));
const Resources = React.lazy(() => import("../pages/resources"));
const Room = React.lazy(() => import("../pages/room"));
const AdminLogin = React.lazy(() => import("../pages/admin/auth/sign-in"));
const AdminHome = React.lazy(() => import("../pages/admin"));
const LoginPage = React.lazy(() => import("../pages/auth/sign-in"));
const LoginSuccess = React.lazy(() => import("../pages/auth/login-success"));

export const router = createBrowserRouter([
	{
		path: "/sign-in",
		lazy: async () => {
			return {
				// Wrap the dynamically imported Layout with Suspense
				element: (
					// <Suspense fallback={<Loader />}>
					<LoginPage />
					// </Suspense>
				),
			};
		},
	},
	{
		path: "/login-success",
		lazy: async () => {
			return {
				element: (
					// <Suspense fallback={<Loader />}>
					<LoginSuccess />
					// </Suspense>
				),
			};
		},
	},
	{
		path: "/",
		lazy: async () => {
			const Layout = (await import("../layout")).default;
			return {
				// Wrap the dynamically imported Layout with Suspense
				element: (
					<Suspense fallback={<Loader />}>
						<Layout />
					</Suspense>
				),
			};
		},

		children: [
			{
				index: true,
				lazy: async () => {
					return {
						// Use Suspense for child components as needed
						element: <Home />,
					};
				},
			},
			{
				path: "/challenges",
				lazy: async () => {
					return {
						// Use Suspense for child components as needed
						element: <Challeges />,
					};
				},
			},
			{
				path: "/resources",
				lazy: async () => {
					return {
						// Use Suspense for child components as needed
						element: <Resources />,
					};
				},
			},
			{
				path: "/assistant",
				lazy: async () => {
					return {
						// Use Suspense for child components as needed
						element: <Assistant />,
					};
				},
			},
			{
				path: "/leaderboard",
				lazy: async () => {
					return {
						// Use Suspense for child components as needed
						element: <Leaderboard />,
					};
				},
			},
			{
				path: "/room/:id",
				lazy: async () => {
					return {
						element: (
							<Suspense fallback={<Loader />}>
								<Room />
							</Suspense>
						),
					};
				},
			},
		],
	},

	{
		path: "/admin",
		lazy: async () => {
			const Layout = (await import("../layout/admin-layout")).default;
			return {
				// Wrap the dynamically imported Layout with Suspense
				element: (
					<Suspense fallback={<Loader />}>
						<Layout />
					</Suspense>
				),
			};
		},

		children: [
			{
				index: true,
				lazy: async () => {
					return {
						// Use Suspense for child components as needed
						element: <AdminHome />,
					};
				},
			},
			{
				path: "/admin/sign-in",
				lazy: async () => {
					return {
						// Use Suspense for child components as needed
						element: <AdminLogin />,
					};
				},
			},
		],
	},
]);
