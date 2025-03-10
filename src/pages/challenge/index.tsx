import { useState } from "react";
import { Search, Filter, CheckCircle, Lock } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for challenges
const challenges = [
	{
		id: "basics",
		title: "Programming Basics",
		description:
			"Learn the fundamentals of programming and software development.",
		difficulty: "Easy",
		points: 10,
		category: "Fundamentals",
		status: "available",
		completed: false,
	},
	{
		id: "web-dev",
		title: "Web Development",
		description: "Master HTML, CSS, JavaScript and modern web frameworks.",
		difficulty: "Easy",
		points: 15,
		category: "Frontend",
		status: "available",
		completed: false,
	},
	{
		id: "backend",
		title: "Backend Development",
		description: "Build robust server-side applications and APIs.",
		difficulty: "Medium",
		points: 20,
		category: "Backend",
		status: "available",
		completed: false,
	},
	{
		id: "algorithms",
		title: "Algorithms & Data Structures",
		description: "Solve complex problems with efficient algorithms.",
		difficulty: "Medium",
		points: 25,
		category: "Computer Science",
		status: "locked",
		completed: false,
	},
	{
		id: "architecture",
		title: "System Architecture",
		description: "Design scalable and maintainable software systems.",
		difficulty: "Hard",
		points: 30,
		category: "System Design",
		status: "locked",
		completed: false,
	},
];

export default function ChallengesPage() {
	const [searchQuery, setSearchQuery] = useState("");

	const filteredChallenges = challenges.filter(
		(challenge) =>
			challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
			challenge.category.toLowerCase().includes(searchQuery.toLowerCase())
	);

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
		<div className="flex flex-col min-h-screen bg-black text-white">
			<header className="p-4 border-b border-gray-800">
				<h1 className="text-xl font-bold text-cyan-400">Learning Challenges</h1>
				<p className="text-xs text-gray-400">
					Browse all available software engineering topics
				</p>
			</header>

			<main className="flex-1 p-4">
				<div className="mb-4 flex gap-2">
					<div className="relative flex-1">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
						<Input
							type="text"
							placeholder="Search challenges..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-8 border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
						/>
					</div>
					<Button variant="outline" size="icon" className="border-gray-700">
						<Filter className="h-4 w-4" />
					</Button>
				</div>

				<ScrollArea className="h-[calc(100vh-10rem)]">
					<div className="grid gap-4">
						{filteredChallenges.map((challenge) => (
							<Card
								key={challenge.id}
								className={`border-gray-800 ${
									challenge.status === "locked"
										? "bg-gray-900/30"
										: "bg-gray-900/50"
								}`}
							>
								<CardHeader className="p-4 pb-2">
									<div className="flex justify-between items-start">
										<div>
											<CardTitle className="text-base">
												{challenge.title}
												{challenge.completed && (
													<CheckCircle className="inline-block ml-2 h-4 w-4 text-green-500" />
												)}
											</CardTitle>
											<CardDescription className="text-xs">
												{challenge.description}
											</CardDescription>
										</div>
										{challenge.status === "locked" && (
											<Lock className="h-5 w-5 text-gray-500" />
										)}
									</div>
								</CardHeader>
								<CardContent className="p-4 pt-2 pb-2">
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline" className="text-xs">
											{challenge.category}
										</Badge>
										<Badge
											className={`${getDifficultyColor(
												challenge.difficulty
											)} text-xs`}
										>
											{challenge.difficulty}
										</Badge>
										<Badge
											variant="outline"
											className="bg-purple-950/30 border-purple-700 text-purple-400 text-xs"
										>
											{challenge.points} pts
										</Badge>
									</div>
								</CardContent>
								<CardFooter className="p-4 pt-2">
									<Button
										size="sm"
										disabled={challenge.status === "locked"}
										onClick={() =>
											(window.location.href = `/room/${challenge.id}`)
										}
										className={
											challenge.status === "locked" ? "opacity-50" : ""
										}
									>
										{challenge.status === "locked"
											? "Locked"
											: "Start Challenge"}
									</Button>
								</CardFooter>
							</Card>
						))}
					</div>
				</ScrollArea>
			</main>
		</div>
	);
}
