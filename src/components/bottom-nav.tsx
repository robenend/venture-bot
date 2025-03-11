"use client";

import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Book, MessageSquare, User, ArrowLeft, Trophy } from "lucide-react";
import { cn } from "@/lib/utils";

export function BottomNav() {
	const location = useLocation(); // Equivalent to usePathname
	const navigate = useNavigate(); // Equivalent to useRouter().push
	const [isVisible, setIsVisible] = useState(true);

	// Hide bottom nav on certain pages if needed
	useEffect(() => {
		// Add logic here to hide the nav on specific pages if needed
		setIsVisible(true);
	}, [location.pathname]);

	if (!isVisible) return null;

	const isRoomPage = location.pathname.startsWith("/room/");
	const isHomePage = location.pathname === "/";
	const isLeaderboardPage = location.pathname === "/leaderboard";
	const isResourcesPage = location.pathname === "/resources";
	const isChallengesPage = location.pathname === "/challenges";
	const isAssistantPage = location.pathname === "/assistant";

	const handleNavigation = (path: string) => {
		navigate(path); // Replaces router.push
	};

	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 bg-gray-900 border-t border-gray-800">
			<div className="grid grid-cols-5 h-16">
				{isRoomPage && (
					<button
						onClick={() => handleNavigation("/map")}
						className="flex flex-col items-center justify-center text-gray-400 hover:text-cyan-400"
					>
						<ArrowLeft size={20} />
						<span className="text-xs mt-1">Back</span>
					</button>
				)}
				{!isRoomPage && (
					<button
						onClick={() => handleNavigation("/")}
						className={cn(
							"flex flex-col items-center justify-center",
							isHomePage ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400"
						)}
					>
						<User size={20} />
						<span className="text-xs mt-1">Home</span>
					</button>
				)}
				<button
					onClick={() => handleNavigation("/resources")}
					className={cn(
						"flex flex-col items-center justify-center",
						isResourcesPage ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400"
					)}
				>
					<Book size={20} />
					<span className="text-xs mt-1">Resources</span>
				</button>
				<button
					onClick={() => handleNavigation("/leaderboard")}
					className={cn(
						"flex flex-col items-center justify-center",
						isLeaderboardPage
							? "text-cyan-400"
							: "text-gray-400 hover:text-cyan-400"
					)}
				>
					<Trophy size={20} />
					<span className="text-xs mt-1">Ranks</span>
				</button>
				{isRoomPage ? (
					<>
						<button
							onClick={() => {
								window.dispatchEvent(
									new CustomEvent("switch-room-tab", { detail: "challenge" })
								);
							}}
							className="flex flex-col items-center justify-center text-gray-400 hover:text-cyan-400"
						>
							<Book size={20} />
							<span className="text-xs mt-1">Challenge</span>
						</button>
						<button
							onClick={() => {
								window.dispatchEvent(
									new CustomEvent("switch-room-tab", { detail: "resources" })
								);
							}}
							className="flex flex-col items-center justify-center text-gray-400 hover:text-cyan-400"
						>
							<MessageSquare size={20} />
							<span className="text-xs mt-1">Help</span>
						</button>
					</>
				) : (
					<>
						<button
							onClick={() => {
								handleNavigation("/challenges");
							}}
							className={cn(
								"flex flex-col items-center justify-center",
								isChallengesPage ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400"
							)}
						>
							<Book size={20} />
							<span className="text-xs mt-1">Challenges</span>
						</button>
						<button
							onClick={() => {
								handleNavigation("/assistant");
							}}
							className={cn(
								"flex flex-col items-center justify-center",
								isAssistantPage ? "text-cyan-400" : "text-gray-400 hover:text-cyan-400"
							)}
						>
							<MessageSquare size={20} />
							<span className="text-xs mt-1">Assistant</span>
						</button>
					</>
				)}
			</div>
		</div>
	);
}
