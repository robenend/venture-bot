import { BottomNav } from "@/components/bottom-nav";
import { Outlet } from "react-router-dom";

export const metadata = {
	title: "CyberQuest - Telegram Mini App",
	description: "Learn cybersecurity through interactive challenges",
	viewport:
		"width=device-width, initial-scale=1, maximum-scale=1, user-scalable=no",
	generator: "v0.dev",
};

export default function RootLayout() {
	return (
		<div className="flex flex-col min-h-screen">
			<main className="flex-1 pb-16">
				<Outlet />
			</main>
			<BottomNav />
		</div>
	);
}
