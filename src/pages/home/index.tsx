import { MessageSquare, Trophy } from "lucide-react";
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
				<div className="grid gap-6"> {/* Increased gap between elements */}
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
							<Badge className="box-border relative z-30 inline-flex items-center justify-center w-auto px-4 py-2 overflow-hidden font-bold text-white transition-all duration-300 bg-indigo-600 rounded-md cursor-pointer group ring-offset-2 ring-1 ring-indigo-300 ring-offset-indigo-200 ease focus:outline-none">
    <span className="absolute bottom-0 right-0 w-8 h-20 -mb-8 -mr-5 transition-all duration-300 ease-out transform rotate-45 translate-x-1 bg-white opacity-10 "></span>
    <span className="absolute top-0 left-0 w-20 h-8 -mt-1 -ml-12 transition-all duration-300 ease-out transform -rotate-45 -translate-x-1 bg-white opacity-10 "></span>
    <span className="relative z-20 flex items-center text-sm">
        <svg className="relative w-5 h-5 mr-2 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path></svg>
        Level 1
    </span>
</Badge>
<div className="space-y-6 px-5 w-full"> {/* Increased gap between sections */}
  <div>
    {/* Progress Title */}
    <h3 className="text-l font-medium text-white mb-2">Progress to Level 2</h3>

    {/* Progress Percentage */}
    <div className="inline-block mb-2 ms-[calc(25%-20px)] py-0.5 px-1.5 bg-blue-50 border border-blue-200 text-xs font-medium text-blue-600 rounded-lg">
      25%
    </div>

    {/* Progress Bar */}
    <div
      className="flex w-full h-2 bg-gray-200 rounded-full overflow-hidden"
      role="progressbar"
      aria-valuenow={25}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <div
        className="flex flex-col justify-center rounded-full overflow-hidden bg-blue-600 text-xs text-white text-center whitespace-nowrap transition duration-500"
        style={{ width: "25%" }}
      ></div>
    </div>
  </div>
</div>

							<div className="w-full grid grid-cols-2 gap-4 mt-6"> {/* Increased gap between cards */}
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
							<div className="grid grid-cols-2 gap-4"> {/* Adjusted gap here */}
								<Button
									variant="outline"
									className="h-auto py-4 flex flex-col items-center justify-center border-gray-700 hover:border-cyan-700 hover:bg-gray-800"
									onClick={() => (window.location.href = "/resources")}
								>
									<svg
									  xmlns="http://www.w3.org/2000/svg"
									  width="14"
									  height="14"
									  viewBox="0 0 14 14"
									  className="h-4 w-4 text-green-500"
									>
									  <g
										fill="none"
										stroke="cyan"
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="0.5"
									  >
										<path d="M11.366 7.318a5.506 5.506 0 1 0-7.549 3.736M.512 6.006h11.011" />
										<path d="M4.382 8.547a9.5 9.5 0 0 1-.484-2.541A9.5 9.5 0 0 1 6.016.5a9.5 9.5 0 0 1 2.117 5.506A10 10 0 0 1 8.02 7.06m1.438 1.118l4.03 1.746l-4.03 1.746L5.43 9.924l4.03-1.746Z" />
										<path d="m7.257 10.72l.004 1.9s.665.88 2.197.88s2.2-.88 2.2-.88v-1.9m-6.229 2.275V9.924" />
									  </g>
									</svg>
									<span>Learning Resources</span>
								</Button>
								<Button
									variant="outline"
									className="h-auto py-4 flex flex-col items-center justify-center border-gray-700 hover:border-cyan-700 hover:bg-gray-800"
									onClick={() => (window.location.href = "/room/basics")}
								>
									<svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48">
									  <path
										fill="none"
										stroke="magenta"
										strokeLinecap="round"
										strokeLinejoin="round"
										d="M43.5 33.088a3.547 3.547 0 0 1-3.54 3.553a3.547 3.547 0 0 1-3.543-3.552v-.001a3.547 3.547 0 0 1 3.541-3.553h0a3.546 3.546 0 0 1 3.541 3.551zm-21.638-19.5v27.809m10.92-4.796l-8.781 4.297c-.723.353-1.559.718-2.14.718c-.58 0-1.418-.365-2.14-.718L6.647 34.501c-1.07-.523-2.148-.96-2.148-2.155V8.647c0-1.194 1.078-2.678 2.148-2.155l13.074 6.397c.708.346 1.697.703 2.14.703s1.43-.357 2.14-.703l13.074-6.397c1.07-.523 2.147.961 2.147 2.155v16.472"
										strokeWidth="3.5"
									  />
									</svg>
									<span>Start Learning</span>
								</Button>
								<Button
									variant="outline"
									className="h-auto py-4 flex flex-col items-center justify-center border-gray-700 hover:border-cyan-700 hover:bg-gray-800"
									onClick={() => (window.location.href = "/assistant")}
								>
									<MessageSquare className="h-6 w-6 mb-2 text-purple-400" />
									<span>Ask the Assistant</span>
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
				</div>
			</main>
		</div>
	);
}
