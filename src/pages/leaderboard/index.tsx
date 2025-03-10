import { useState } from "react";
import {
	Search,
	Trophy,
	Medal,
	Award,
	ArrowUp,
	ArrowDown,
	Minus,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Mock data for leaderboard
const users = [
	{
		id: 1,
		name: "Sarah Johnson",
		username: "sarahcodes",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 1250,
		level: 8,
		completedChallenges: 42,
		rank: 1,
		change: "up",
	},
	{
		id: 2,
		name: "Michael Chen",
		username: "mikedev",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 980,
		level: 7,
		completedChallenges: 35,
		rank: 2,
		change: "same",
	},
	{
		id: 3,
		name: "Jessica Williams",
		username: "jesscode",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 875,
		level: 6,
		completedChallenges: 30,
		rank: 3,
		change: "up",
	},
	{
		id: 4,
		name: "David Rodriguez",
		username: "davecoder",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 720,
		level: 5,
		completedChallenges: 25,
		rank: 4,
		change: "down",
	},
	{
		id: 5,
		name: "Emily Thompson",
		username: "emilyt",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 650,
		level: 5,
		completedChallenges: 22,
		rank: 5,
		change: "up",
	},
	{
		id: 6,
		name: "James Wilson",
		username: "jwilson",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 590,
		level: 4,
		completedChallenges: 20,
		rank: 6,
		change: "down",
	},
	{
		id: 7,
		name: "Sophia Garcia",
		username: "sophiadev",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 540,
		level: 4,
		completedChallenges: 18,
		rank: 7,
		change: "same",
	},
	{
		id: 8,
		name: "Daniel Martinez",
		username: "danmart",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 480,
		level: 3,
		completedChallenges: 16,
		rank: 8,
		change: "up",
	},
	{
		id: 9,
		name: "Olivia Brown",
		username: "oliviab",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 420,
		level: 3,
		completedChallenges: 14,
		rank: 9,
		change: "down",
	},
	{
		id: 10,
		name: "Code Newbie",
		username: "you",
		avatar: "/placeholder.svg?height=40&width=40",
		points: 0,
		level: 1,
		completedChallenges: 0,
		rank: 42,
		change: "same",
		isCurrentUser: true,
	},
];

export default function LeaderboardPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [period, setPeriod] = useState("all-time");

	const filteredUsers = users.filter(
		(user) =>
			user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
			user.username.toLowerCase().includes(searchQuery.toLowerCase())
	);

	const getChangeIcon = (change: string) => {
		switch (change) {
			case "up":
				return <ArrowUp className="h-4 w-4 text-green-500" />;
			case "down":
				return <ArrowDown className="h-4 w-4 text-red-500" />;
			default:
				return <Minus className="h-4 w-4 text-gray-500" />;
		}
	};

	const getRankIcon = (rank: number) => {
		switch (rank) {
			case 1:
				return <Trophy className="h-5 w-5 text-yellow-400" />;
			case 2:
				return <Medal className="h-5 w-5 text-gray-400" />;
			case 3:
				return <Award className="h-5 w-5 text-amber-700" />;
			default:
				return null;
		}
	};

	return (
		<div className="flex flex-col min-h-screen bg-black text-white">
			<header className="p-4 border-b border-gray-800">
				<h1 className="text-xl font-bold text-cyan-400">Leaderboard</h1>
				<p className="text-xs text-gray-400">
					See how you rank against other learners
				</p>
			</header>

			<main className="flex-1 p-4">
				<div className="mb-4 flex gap-2">
					<div className="relative flex-1">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
						<Input
							type="text"
							placeholder="Search users..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-8 border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
						/>
					</div>
				</div>

				<Tabs value={period} onValueChange={setPeriod} className="w-full mb-4">
					<TabsList className="grid w-full grid-cols-3">
						<TabsTrigger value="weekly">Weekly</TabsTrigger>
						<TabsTrigger value="monthly">Monthly</TabsTrigger>
						<TabsTrigger value="all-time">All Time</TabsTrigger>
					</TabsList>
				</Tabs>

				<Card className="border-gray-800 bg-gray-900/50 mb-4">
					<CardHeader className="p-4 pb-2">
						<CardTitle className="text-lg">Top Learners</CardTitle>
						<CardDescription>Based on points earned</CardDescription>
					</CardHeader>
					<CardContent className="p-0">
						<div className="divide-y divide-gray-800">
							{filteredUsers.slice(0, 10).map((user) => (
								<div
									key={user.id}
									className={`flex items-center p-4 ${
										user.isCurrentUser ? "bg-cyan-900/20" : ""
									}`}
								>
									<div className="flex items-center justify-center w-8">
										{getRankIcon(user.rank) || (
											<span className="text-gray-400">{user.rank}</span>
										)}
									</div>
									<div className="flex items-center flex-1 ml-2">
										<Avatar className="h-10 w-10 mr-3">
											<AvatarImage src={user.avatar} alt={user.name} />
											<AvatarFallback>{user.name.charAt(0)}</AvatarFallback>
										</Avatar>
										<div>
											<p className="font-medium">
												{user.name}
												{user.isCurrentUser && (
													<Badge className="ml-2 bg-cyan-800 text-cyan-100">
														You
													</Badge>
												)}
											</p>
											<p className="text-xs text-gray-400">@{user.username}</p>
										</div>
									</div>
									<div className="flex flex-col items-end">
										<div className="flex items-center">
											<span className="font-bold text-cyan-400">
												{user.points}
											</span>
											<span className="text-xs ml-1">pts</span>
											<span className="ml-2">{getChangeIcon(user.change)}</span>
										</div>
										<div className="text-xs text-gray-400">
											Level {user.level} • {user.completedChallenges} completed
										</div>
									</div>
								</div>
							))}
						</div>
					</CardContent>
				</Card>

				{/* Current User Card (if not in top 10) */}
				{!filteredUsers.slice(0, 10).some((user) => user.isCurrentUser) && (
					<Card className="border-gray-800 bg-cyan-900/20">
						<CardContent className="p-4">
							<div className="flex items-center">
								<div className="flex items-center justify-center w-8">
									<span className="text-gray-400">42</span>
								</div>
								<div className="flex items-center flex-1 ml-2">
									<Avatar className="h-10 w-10 mr-3">
										<AvatarImage
											src="/placeholder.svg?height=40&width=40"
											alt="You"
										/>
										<AvatarFallback>CN</AvatarFallback>
									</Avatar>
									<div>
										<p className="font-medium">
											Code Newbie
											<Badge className="ml-2 bg-cyan-800 text-cyan-100">
												You
											</Badge>
										</p>
										<p className="text-xs text-gray-400">@you</p>
									</div>
								</div>
								<div className="flex flex-col items-end">
									<div className="flex items-center">
										<span className="font-bold text-cyan-400">0</span>
										<span className="text-xs ml-1">pts</span>
										<span className="ml-2">
											<Minus className="h-4 w-4 text-gray-500" />
										</span>
									</div>
									<div className="text-xs text-gray-400">
										Level 1 • 0 completed
									</div>
								</div>
							</div>
						</CardContent>
					</Card>
				)}
			</main>
		</div>
	);
}
