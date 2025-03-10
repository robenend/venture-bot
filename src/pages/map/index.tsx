import { useState } from "react";
import { Info, Lock } from "lucide-react";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";
import { Badge } from "@/components/ui/badge";

export default function MapPage() {
	const [hoveredRoom, setHoveredRoom] = useState<string | null>(null);

	// Define the available rooms and their status
	const rooms = [
		{
			id: "basics",
			name: "Programming Basics",
			difficulty: "Easy",
			status: "available",
			position: "top-1/4 left-1/4",
			description:
				"Learn the fundamentals of programming and software development.",
		},
		{
			id: "web-dev",
			name: "Web Development",
			difficulty: "Easy",
			status: "available",
			position: "top-1/3 right-1/4",
			description: "Master HTML, CSS, JavaScript and modern web frameworks.",
		},
		{
			id: "backend",
			name: "Backend Development",
			difficulty: "Medium",
			status: "available",
			position: "bottom-1/3 left-1/3",
			description: "Build robust server-side applications and APIs.",
		},
		{
			id: "algorithms",
			name: "Algorithms & Data Structures",
			difficulty: "Medium",
			status: "locked",
			position: "top-1/2 right-1/3",
			description: "Solve complex problems with efficient algorithms.",
		},
		{
			id: "architecture",
			name: "System Architecture",
			difficulty: "Hard",
			status: "locked",
			position: "bottom-1/4 right-1/4",
			description: "Design scalable and maintainable software systems.",
		},
	];

	// Get difficulty color
	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case "Easy":
				return "bg-green-500";
			case "Medium":
				return "bg-yellow-500";
			case "Hard":
				return "bg-red-500";
			default:
				return "bg-blue-500";
		}
	};

	return (
		<div className="flex min-h-screen flex-col bg-black text-white">
			<main className="container mx-auto flex-1 px-4 py-4">
				<div className="mb-4">
					<div className="text-xl font-bold text-cyan-400">Learning Path</div>
					<p className="text-sm text-gray-400">
						Navigate through software engineering topics
					</p>
				</div>
				<div className="relative mx-auto h-[calc(100vh-8rem)] w-full max-w-4xl rounded-lg border border-gray-800 bg-gray-900">
					{/* Map grid lines */}
					<div className="absolute inset-0 grid grid-cols-12 grid-rows-12 opacity-20">
						{Array.from({ length: 12 }).map((_, i) => (
							<div
								key={`col-${i}`}
								className="col-span-1 border-r border-cyan-500/30"
							/>
						))}
						{Array.from({ length: 12 }).map((_, i) => (
							<div
								key={`row-${i}`}
								className="row-span-1 border-b border-cyan-500/30"
							/>
						))}
					</div>

					{/* Debug Navigation Links */}
					<div className="absolute top-4 left-4 z-10 rounded border border-gray-700 bg-gray-900/80 p-3 backdrop-blur-sm">
						<div className="mb-2 text-sm font-medium text-gray-300">
							Quick Access:
						</div>
						<div className="grid gap-2 text-xs">
							{rooms
								.filter((room) => room.status === "available")
								.map((room) => (
									<a
										key={room.id}
										href={`/room/${room.id}`}
										className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300"
									>
										<div
											className={`h-3 w-3 rounded-full ${getDifficultyColor(
												room.difficulty
											)}`}
										/>
										<span>{room.name}</span>
									</a>
								))}
						</div>
					</div>

					{/* Map decoration elements */}
					<div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/50 opacity-20" />
					<div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/30 opacity-10" />
					<div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full border border-cyan-500/20 opacity-5" />

					{/* Room nodes */}
					<TooltipProvider>
						{rooms.map((room) => (
							<div
								key={room.id}
								className={`absolute ${room.position} transform -translate-x-1/2 -translate-y-1/2`}
							>
								<Tooltip>
									<TooltipTrigger asChild>
										<div
											onClick={() => {
												if (room.status === "available") {
													window.location.href = `/room/${room.id}`;
												}
											}}
											className={`group relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-full 
            ${
							room.status === "available"
								? "bg-gray-800 hover:bg-gray-700 cursor-pointer"
								: "bg-gray-800/50 cursor-not-allowed"
						} 
            border-2 
            ${
							hoveredRoom === room.id
								? "border-cyan-400 shadow-lg shadow-cyan-500/20"
								: "border-gray-700"
						}
            transition-all duration-300`}
											onMouseEnter={() => setHoveredRoom(room.id)}
											onMouseLeave={() => setHoveredRoom(null)}
										>
											{room.status === "locked" ? (
												<Lock className="h-5 w-5 sm:h-6 sm:w-6 text-gray-500" />
											) : (
												<div
													className={`h-3 w-3 sm:h-4 sm:w-4 rounded-full ${getDifficultyColor(
														room.difficulty
													)}`}
												/>
											)}
											<div
												className={`absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-xs sm:text-sm font-medium
            ${hoveredRoom === room.id ? "text-cyan-400" : "text-gray-400"}`}
											>
												{room.name}
											</div>
											{hoveredRoom === room.id && (
												<div className="absolute -top-1 left-1/2 h-8 sm:h-12 w-1 -translate-x-1/2 bg-gradient-to-t from-cyan-500/0 to-cyan-500/50" />
											)}
										</div>
									</TooltipTrigger>
									<TooltipContent
										side="top"
										className="border-gray-700 bg-gray-800 text-white"
									>
										<div className="p-2">
											<div className="mb-1 font-bold">{room.name}</div>
											<div className="mb-2 text-xs sm:text-sm text-gray-300">
												{room.description}
											</div>
											<div className="flex items-center gap-2">
												<Badge
													className={`${getDifficultyColor(room.difficulty)}`}
												>
													{room.difficulty}
												</Badge>
												{room.status === "locked" && (
													<Badge
														variant="outline"
														className="border-gray-600 text-gray-400"
													>
														Locked
													</Badge>
												)}
											</div>
										</div>
									</TooltipContent>
								</Tooltip>
							</div>
						))}
					</TooltipProvider>

					{/* Connection lines between rooms */}
					<svg
						className="absolute inset-0 h-full w-full"
						xmlns="http://www.w3.org/2000/svg"
					>
						<line
							x1="25%"
							y1="25%"
							x2="75%"
							y2="33%"
							stroke="rgba(6, 182, 212, 0.3)"
							strokeWidth="2"
						/>
						<line
							x1="25%"
							y1="25%"
							x2="33%"
							y2="66%"
							stroke="rgba(6, 182, 212, 0.3)"
							strokeWidth="2"
						/>
						<line
							x1="75%"
							y1="33%"
							x2="66%"
							y2="50%"
							stroke="rgba(6, 182, 212, 0.15)"
							strokeDasharray="5,5"
						/>
						<line
							x1="33%"
							y1="66%"
							x2="75%"
							y2="75%"
							stroke="rgba(6, 182, 212, 0.15)"
							strokeDasharray="5,5"
						/>
						<line
							x1="66%"
							y1="50%"
							x2="75%"
							y2="75%"
							stroke="rgba(6, 182, 212, 0.15)"
							strokeDasharray="5,5"
						/>
					</svg>

					{/* Map legend */}
					<div className="absolute bottom-4 right-4 rounded border border-gray-700 bg-gray-900/80 p-3 backdrop-blur-sm">
						<div className="mb-2 flex items-center gap-2 text-sm font-medium text-gray-300">
							<Info size={14} />
							<span>Legend</span>
						</div>
						<div className="grid gap-2 text-xs">
							<div className="flex items-center gap-2">
								<div className="h-3 w-3 rounded-full bg-green-500" />
								<span>Easy</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-3 w-3 rounded-full bg-yellow-500" />
								<span>Medium</span>
							</div>
							<div className="flex items-center gap-2">
								<div className="h-3 w-3 rounded-full bg-red-500" />
								<span>Hard</span>
							</div>
							<div className="flex items-center gap-2">
								<Lock size={12} className="text-gray-500" />
								<span>Locked</span>
							</div>
						</div>
					</div>
				</div>
			</main>
		</div>
	);
}
