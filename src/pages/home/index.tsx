import { Book, Map, MessageSquare, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Progress } from "@/components/ui/progress";

export default function HomePage() {
	return (
		<div className="flex flex-col min-h-screen bg-gray-900 text-gray-100">
			<header className="p-4 border-b border-gray-800">
				<h1 className="text-2xl font-bold text-cyan-400">CodeQuest</h1>
				<p className="text-sm text-gray-400">
					Interactive software engineering learning platform
				</p>
			</header>

			<main className="flex-1 p-4">
				<div className="grid gap-4">
					{/* Profile Card */}
					<Card className="border-gray-800 bg-gray-900/50">
						<CardContent className="p-6 flex flex-col items-center">
							<Avatar className="w-20 h-20 mb-4">
								<AvatarImage
									src="/placeholder.svg?height=80&width=80"
									alt="Profile picture"
								/>
								<AvatarFallback>CN</AvatarFallback>
							</Avatar>
							<h2 className="text-xl font-bold mb-2">Code Newbie</h2>
							<Badge className="mb-4">Level 1</Badge>

							<div className="w-full mb-4">
								<div className="flex justify-between mb-1 text-xs">
									<span>Progress to Level 2</span>
									<span>25%</span>
								</div>
								<Progress value={25} className="h-2" />
							</div>

							<div className="w-full grid grid-cols-2 gap-4 mt-2">
								<div className="text-center p-2 bg-gray-800 rounded-md">
									<p className="text-xs text-gray-400">Completed</p>
									<p className="text-lg font-bold">0/5</p>
								</div>
								<div className="text-center p-2 bg-gray-800 rounded-md">
									<p className="text-xs text-gray-400">Points</p>
									<p className="text-lg font-bold">0</p>
								</div>
							</div>
						</CardContent>
					</Card>

					{/* Quick Access Card */}
					<Card className="border-gray-800 bg-gray-900/50">
						<CardHeader className="pb-2">
							<CardTitle className="text-lg">Quick Access</CardTitle>
							<CardDescription>Continue your learning journey</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="grid grid-cols-2 gap-3">
								<Button
									variant="outline"
									className="h-auto py-4 flex flex-col items-center justify-center border-gray-700 hover:border-cyan-700 hover:bg-gray-800"
									onClick={() => (window.location.href = "/map")}
								>
									<Map className="h-6 w-6 mb-2 text-cyan-400" />
									<span>Learning Path</span>
								</Button>
								<Button
									variant="outline"
									className="h-auto py-4 flex flex-col items-center justify-center border-gray-700 hover:border-cyan-700 hover:bg-gray-800"
									onClick={() => (window.location.href = "/room/basics")}
								>
									<Book className="h-6 w-6 mb-2 text-green-400" />
									<span>Start Learning</span>
								</Button>
								<Button
									variant="outline"
									className="h-auto py-4 flex flex-col items-center justify-center border-gray-700 hover:border-cyan-700 hover:bg-gray-800"
									onClick={() => (window.location.href = "/assistant")}
								>
									<MessageSquare className="h-6 w-6 mb-2 text-purple-400" />
									<span>AI Assistant</span>
								</Button>
								<Button
									variant="outline"
									className="h-auto py-4 flex flex-col items-center justify-center border-gray-700 hover:border-cyan-700 hover:bg-gray-800"
									onClick={() => (window.location.href = "/leaderboard")}
								>
									<Trophy className="h-6 w-6 mb-2 text-yellow-400" />
									<span>Leaderboard</span>
								</Button>
							</div>
						</CardContent>
					</Card>

					{/* Recent Activity */}
					<Card className="border-gray-800 bg-gray-900/50">
						<CardHeader className="pb-2">
							<CardTitle className="text-lg">Recent Activity</CardTitle>
							<CardDescription>Your latest achievements</CardDescription>
						</CardHeader>
						<CardContent>
							<div className="text-center py-6 text-gray-500">
								<p>No recent activity yet.</p>
								<p className="text-sm">
									Complete challenges to see your progress here!
								</p>
							</div>
						</CardContent>
					</Card>
				</div>
			</main>
		</div>
	);
}
