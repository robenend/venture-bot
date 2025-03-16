import type React from "react";

import { useState, useEffect } from "react";
import { CheckCircle, HelpCircle, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { useParams } from "react-router-dom";

// Mock data for rooms
const roomData = {
	basics: {
		title: "Programming Basics",
		description:
			"Learn the fundamentals of programming and software development.",
		difficulty: "Easy",
		points: 10,
		question:
			"What data structure would you use to implement a First-In-First-Out (FIFO) collection?",
		hint: "Think about a line of people waiting for something. The first person to arrive is the first person to be served.",
		answer: "queue",
		resources: [
			{ title: "Data Structures Explained", url: "#" },
			{ title: "Introduction to Algorithms", url: "#" },
		],
	},
	"web-dev": {
		title: "Web Development",
		description: "Master HTML, CSS, JavaScript and modern web frameworks.",
		difficulty: "Easy",
		points: 15,
		question:
			"Which JavaScript method would you use to add an event listener to a DOM element?",
		hint: "This method takes an event type and a callback function as parameters.",
		answer: "addEventListener",
		resources: [
			{ title: "JavaScript DOM Manipulation", url: "#" },
			{ title: "Web Development Fundamentals", url: "#" },
		],
	},
	backend: {
		title: "Backend Development",
		description: "Build robust server-side applications and APIs.",
		difficulty: "Medium",
		points: 20,
		question:
			"What HTTP status code indicates a successful response for a resource creation?",
		hint: "It's in the 2xx range and specifically used when a new resource has been created.",
		answer: "201",
		resources: [
			{ title: "RESTful API Design", url: "#" },
			{ title: "Backend Architecture Patterns", url: "#" },
		],
	},
};

export default function RoomPage() {
	const [answer, setAnswer] = useState("");
	const [showHint, setShowHint] = useState(false);
	const [result, setResult] = useState<"correct" | "incorrect" | null>(null);
	const [activeTab, setActiveTab] = useState("challenge");

	const { id: roomId } = useParams(); // Retrieve the `id` from the route
	const room = roomData[roomId as keyof typeof roomData];

	useEffect(() => {
		// Listen for tab change events from the bottom nav
		const handleTabChange = (e: CustomEvent) => {
			setActiveTab(e.detail);
		};

		window.addEventListener(
			"switch-room-tab",
			handleTabChange as EventListener
		);

		return () => {
			window.removeEventListener(
				"switch-room-tab",
				handleTabChange as EventListener
			);
		};
	}, []);

	if (!room) {
		return (
			<div className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
				<div className="text-center p-4">
					<h1 className="mb-4 text-2xl font-bold text-red-500">
						Topic Not Found
					</h1>
					<p className="mb-6 text-sm text-gray-400">
						The learning topic you're looking for doesn't exist or is not
						available yet.
					</p>
					<p className="mb-6 text-sm text-gray-400">
						Attempted to load topic with ID: {roomId}
					</p>
					<a href="/map">
						<Button>Return to Map</Button>
					</a>
				</div>
			</div>
		);
	}

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (answer.toLowerCase().trim() === room.answer.toLowerCase()) {
			setResult("correct");
		} else {
			setResult("incorrect");
		}
	};

	//Integration
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
			<div className="p-4 border-b border-gray-800">
				<div className="flex justify-between items-center">
					<div>
						<h1 className="text-xl font-bold text-cyan-400">{room.title}</h1>
						<p className="text-xs text-gray-400">{room.description}</p>
					</div>
					<Badge className={`${getDifficultyColor(room.difficulty)}`}>
						{room.difficulty} • {room.points} pts
					</Badge>
				</div>
			</div>

			<main className="flex-1 p-4">
				<Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
					<TabsList className="hidden">
						<TabsTrigger value="challenge">Challenge</TabsTrigger>
						<TabsTrigger value="resources">Resources</TabsTrigger>
						<TabsTrigger value="terminal">Code Editor</TabsTrigger>
					</TabsList>

					<TabsContent value="challenge">
						<Card className="border-gray-800 bg-gray-900">
							<CardHeader className="p-4">
								<CardTitle className="text-lg text-cyan-400">
									Challenge
								</CardTitle>
								<CardDescription className="text-sm">
									{room.question}
								</CardDescription>
							</CardHeader>
							<CardContent className="p-4">
								{showHint && (
									<Alert className="mb-4 border-yellow-800 bg-yellow-950/50">
										<HelpCircle className="h-4 w-4 text-yellow-500" />
										<AlertTitle className="text-yellow-500 text-sm">
											Hint
										</AlertTitle>
										<AlertDescription className="text-yellow-300 text-xs">
											{room.hint}
										</AlertDescription>
									</Alert>
								)}

								{result === "correct" && (
									<Alert className="mb-4 border-green-800 bg-green-950/50">
										<CheckCircle className="h-4 w-4 text-green-500" />
										<AlertTitle className="text-green-500 text-sm">
											Correct!
										</AlertTitle>
										<AlertDescription className="text-green-300 text-xs">
											Great job! You've successfully completed this challenge
											and earned {room.points} points.
										</AlertDescription>
									</Alert>
								)}

								{result === "incorrect" && (
									<Alert className="mb-4 border-red-800 bg-red-950/50">
										<AlertTriangle className="h-4 w-4 text-red-500" />
										<AlertTitle className="text-red-500 text-sm">
											Incorrect
										</AlertTitle>
										<AlertDescription className="text-red-300 text-xs">
											That's not the right answer. Try again or use the hint for
											help.
										</AlertDescription>
									</Alert>
								)}

								<form onSubmit={handleSubmit}>
									<div className="mb-4 flex gap-2">
										<Input
											type="text"
											placeholder="Enter your answer..."
											value={answer}
											onChange={(e) => setAnswer(e.target.value)}
											className="border-gray-700 bg-gray-800 text-white placeholder:text-gray-500 focus-visible:ring-cyan-500"
										/>
										<Button type="submit" size="sm">
											Submit
										</Button>
									</div>
								</form>
							</CardContent>
							<CardFooter className="flex justify-between p-4">
								<Button
									variant="outline"
									size="sm"
									className="border-yellow-700 bg-yellow-950/30 text-yellow-400 hover:bg-yellow-900/50 hover:text-yellow-300"
									onClick={() => setShowHint(!showHint)}
								>
									{showHint ? "Hide Hint" : "Show Hint"}
								</Button>
							</CardFooter>
						</Card>
					</TabsContent>

					<TabsContent value="resources">
						<Card className="border-gray-800 bg-gray-900">
							<CardHeader className="p-4">
								<CardTitle className="text-lg text-cyan-400">
									Learning Resources
								</CardTitle>
								<CardDescription className="text-sm">
									Helpful materials to solve this challenge
								</CardDescription>
							</CardHeader>
							<CardContent className="p-4">
								<div className="grid gap-4">
									{room.resources.map((resource, index) => (
										<div
											key={index}
											className="rounded-lg border border-gray-800 bg-gray-950 p-3"
										>
											<h3 className="mb-1 font-medium text-cyan-400 text-sm">
												{resource.title}
											</h3>
											<p className="mb-2 text-xs text-gray-400">
												External resource to help with this challenge
											</p>
											<a href={resource.url}>
												<Button variant="outline" size="sm">
													View Resource
												</Button>
											</a>
										</div>
									))}
								</div>
							</CardContent>
						</Card>
					</TabsContent>

					<TabsContent value="terminal">
						<Card className="border-gray-800 bg-gray-900">
							<CardHeader className="p-4">
								<CardTitle className="text-lg text-cyan-400">
									Code Editor
								</CardTitle>
								<CardDescription className="text-sm">
									Practice coding in this simulated environment
								</CardDescription>
							</CardHeader>
							<CardContent className="p-4">
								<div className="rounded-lg border border-gray-800 bg-gray-950 p-3">
									<div className="mb-2 flex items-center gap-2">
										<div className="h-2 w-2 rounded-full bg-red-500" />
										<div className="h-2 w-2 rounded-full bg-yellow-500" />
										<div className="h-2 w-2 rounded-full bg-green-500" />
										<span className="ml-2 text-xs text-gray-400">code.js</span>
									</div>
									<div className="h-48 font-mono text-green-400 text-xs">
										<p className="mb-2">// Welcome to the Code Editor!</p>
										<p className="mb-2">
											// This is a simulated environment where you can practice
											coding.
										</p>
										<p className="mb-2 text-gray-500">
											// Note: This is a demo editor and doesn't execute real
											code yet.
										</p>
										<div className="mt-4 flex items-center">
											<span className="text-cyan-400">function</span>
											<span className="text-yellow-400"> example</span>
											<span className="text-white">() {"{"}</span>
										</div>
										<div className="ml-4 text-white">
											<span className="text-cyan-400"> return</span>{" "}
											<span className="text-green-400">"Hello, World!"</span>;
										</div>
										<div className="text-white"></div>
										<div className="mt-2 text-white animate-pulse">|</div>
									</div>
								</div>
							</CardContent>
						</Card>
					</TabsContent>
				</Tabs>
			</main>
		</div>
	);
}
