import { createBrowserRouter } from "react-router-dom";
import React, { Suspense } from "react";
import Loader from "@/components/loader"; // Ensure the Loader component exists and is properly imported.

export const ROLES = {
	SuperAdmin: "super-admin",
	Admin: "admin",
	Allocator: "allocator",
	Sales: "sales",
};

// Dynamically import RootLayout and Home
const Home = React.lazy(() => import("../pages/home"));
const Map = React.lazy(() => import("../pages/map"));
const Leaderboard = React.lazy(() => import("../pages/leaderboard"));
const Assistant = React.lazy(() => import("../pages/assistant"));
const Challeges = React.lazy(() => import("../pages/challenge"));
const Room = React.lazy(() => import("../pages/room"));

export const router = createBrowserRouter([
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
				path: "/map",
				lazy: async () => {
					return {
						// Use Suspense for child components as needed
						element: <Map />,
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
]);
