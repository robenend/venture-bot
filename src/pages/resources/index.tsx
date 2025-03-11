import { useState } from "react";
import {
	Search,
	Filter,
	ExternalLink,
	BookOpen,
	Code,
	Server,
	Database,
	Globe,
	Cpu,
	GitBranch,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ScrollArea } from "@/components/ui/scroll-area";

// Mock data for resources
const resources = [
	{
		id: 1,
		title: "JavaScript Fundamentals",
		description: "Learn the core concepts of JavaScript programming language.",
		url: "https://javascript.info/",
		category: "frontend",
		type: "documentation",
		difficulty: "beginner",
		icon: <Code className="h-5 w-5" />,
	},
	{
		id: 2,
		title: "React Documentation",
		description: "Official documentation for the React library.",
		url: "https://reactjs.org/docs/getting-started.html",
		category: "frontend",
		type: "documentation",
		difficulty: "intermediate",
		icon: <Code className="h-5 w-5" />,
	},
	{
		id: 3,
		title: "Node.js Crash Course",
		description: "A comprehensive introduction to Node.js for beginners.",
		url: "https://nodejs.dev/learn",
		category: "backend",
		type: "tutorial",
		difficulty: "beginner",
		icon: <Server className="h-5 w-5" />,
	},
	{
		id: 4,
		title: "SQL Database Design",
		description: "Learn how to design efficient and scalable SQL databases.",
		url: "https://www.postgresql.org/docs/current/tutorial.html",
		category: "database",
		type: "documentation",
		difficulty: "intermediate",
		icon: <Database className="h-5 w-5" />,
	},
	{
		id: 5,
		title: "Web Development Roadmap",
		description: "A complete roadmap to becoming a web developer in 2023.",
		url: "https://roadmap.sh/frontend",
		category: "frontend",
		type: "guide",
		difficulty: "all-levels",
		icon: <Globe className="h-5 w-5" />,
	},
	{
		id: 6,
		title: "Data Structures and Algorithms",
		description:
			"Learn essential data structures and algorithms for coding interviews.",
		url: "https://www.geeksforgeeks.org/data-structures/",
		category: "cs-fundamentals",
		type: "tutorial",
		difficulty: "intermediate",
		icon: <Cpu className="h-5 w-5" />,
	},
	{
		id: 7,
		title: "Git and GitHub Tutorial",
		description: "Master version control with Git and GitHub.",
		url: "https://www.atlassian.com/git/tutorials",
		category: "tools",
		type: "tutorial",
		difficulty: "beginner",
		icon: <GitBranch className="h-5 w-5" />,
	},
	{
		id: 8,
		title: "RESTful API Design",
		description: "Best practices for designing RESTful APIs.",
		url: "https://restfulapi.net/",
		category: "backend",
		type: "guide",
		difficulty: "intermediate",
		icon: <Server className="h-5 w-5" />,
	},
	{
		id: 9,
		title: "MongoDB University",
		description: "Free courses on MongoDB database design and operations.",
		url: "https://university.mongodb.com/",
		category: "database",
		type: "course",
		difficulty: "intermediate",
		icon: <Database className="h-5 w-5" />,
	},
	{
		id: 10,
		title: "TypeScript Handbook",
		description: "Official documentation for TypeScript language.",
		url: "https://www.typescriptlang.org/docs/",
		category: "frontend",
		type: "documentation",
		difficulty: "intermediate",
		icon: <Code className="h-5 w-5" />,
	},
];

export default function ResourcesPage() {
	const [searchQuery, setSearchQuery] = useState("");
	const [activeCategory, setActiveCategory] = useState("all");

	const filteredResources = resources.filter(
		(resource) =>
			(activeCategory === "all" || resource.category === activeCategory) &&
			(resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
				resource.description.toLowerCase().includes(searchQuery.toLowerCase()))
	);

	const getDifficultyColor = (difficulty: string) => {
		switch (difficulty) {
			case "beginner":
				return "bg-green-500";
			case "intermediate":
				return "bg-yellow-500";
			case "advanced":
				return "bg-red-500";
			default:
				return "bg-blue-500";
		}
	};

	return (
		<div className="flex flex-col min-h-screen bg-black text-white">
			<header className="p-4 border-b border-gray-800">
				<h1 className="text-xl font-bold text-cyan-400">Learning Resources</h1>
				<p className="text-xs text-gray-400">
					Explore curated resources for software engineering
				</p>
			</header>

			<main className="flex-1 p-4">
				<div className="mb-4 flex gap-2">
					<div className="relative flex-1">
						<Search className="absolute left-2 top-2.5 h-4 w-4 text-gray-500" />
						<Input
							type="text"
							placeholder="Search resources..."
							value={searchQuery}
							onChange={(e) => setSearchQuery(e.target.value)}
							className="pl-8 border-gray-700 bg-gray-800 text-white placeholder:text-gray-500"
						/>
					</div>
					<Button variant="outline" size="icon" className="border-gray-700">
						<Filter className="h-4 w-4" />
					</Button>
				</div>

				<Tabs
  value={activeCategory}
  onValueChange={setActiveCategory}
  className="w-full mb-4"
>
  <TabsList className="grid w-full grid-cols-3 mb-2 gap-4">
    <TabsTrigger
      value="all"
      className={`relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-lg font-medium ${
        activeCategory === 'all' ? 'text-gray-500 bg-cyan-300' : 'text-gray-600 hover:bg-cyan-50'
      } border border-cyan-400 rounded-full group transition-all duration-300`}
    >
      <span className="relative">All</span>
      {activeCategory === 'all' && (
        <button
          onClick={() => setActiveCategory('')}
          className="absolute top-0 right-0 px-2 text-white text-xl"
        >
          &times;
        </button>
      )}
    </TabsTrigger>
    <TabsTrigger
      value="frontend"
      className={`relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-lg font-medium ${
        activeCategory === 'frontend' ? 'text-gray-500 bg-cyan-300' : 'text-gray-600 hover:bg-cyan-50'
      } border border-cyan-400 rounded-full group transition-all duration-300`}
    >
      <span className="relative">Frontend</span>
      {activeCategory === 'frontend' && (
        <button
          onClick={() => setActiveCategory('')}
          className="absolute top-0 right-0 px-2 text-white text-xl"
        >
          &times;
        </button>
      )}
    </TabsTrigger>
    <TabsTrigger
      value="backend"
      className={`relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-lg font-medium ${
        activeCategory === 'backend' ? 'text-gray-500 bg-cyan-300' : 'text-gray-600 hover:bg-cyan-50'
      } border border-cyan-400 rounded-full group transition-all duration-300`}
    >
      <span className="relative">Backend</span>
      {activeCategory === 'backend' && (
        <button
          onClick={() => setActiveCategory('')}
          className="absolute top-0 right-0 px-2 text-white text-xl"
        >
          &times;
        </button>
      )}
    </TabsTrigger>
  </TabsList>
  <TabsList className="grid w-full grid-cols-3 gap-4">
    <TabsTrigger
      value="database"
      className={`relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-lg font-medium ${
        activeCategory === 'database' ? 'text-gray-500 bg-cyan-300' : 'text-gray-600 hover:bg-cyan-50'
      } border border-cyan-400 rounded-full group transition-all duration-300`}
    >
      <span className="relative">Database</span>
      {activeCategory === 'database' && (
        <button
          onClick={() => setActiveCategory('')}
          className="absolute top-0 right-0 px-2 text-white text-xl"
        >
          &times;
        </button>
      )}
    </TabsTrigger>
    <TabsTrigger
      value="cs-fundamentals"
      className={`relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-lg font-medium ${
        activeCategory === 'cs-fundamentals' ? 'text-gray-500 bg-cyan-300' : 'text-gray-600 hover:bg-cyan-50'
      } border border-cyan-400 rounded-full group transition-all duration-300`}
    >
      <span className="relative">CS Basics</span>
      {activeCategory === 'cs-fundamentals' && (
        <button
          onClick={() => setActiveCategory('')}
          className="absolute top-0 right-0 px-2 text-white text-xl"
        >
          &times;
        </button>
      )}
    </TabsTrigger>
    <TabsTrigger
      value="tools"
      className={`relative inline-flex items-center justify-center px-3 py-2 overflow-hidden text-lg font-medium ${
        activeCategory === 'tools' ? 'text-gray-500 bg-cyan-300' : 'text-gray-600 hover:bg-cyan-50'
      } border border-cyan-400 rounded-full group transition-all duration-300`}
    >
      <span className="relative">Tools</span>
      {activeCategory === 'tools' && (
        <button
          onClick={() => setActiveCategory('')}
          className="absolute top-0 right-0 px-2 text-white text-xl"
        >
          &times;
        </button>
      )}
    </TabsTrigger>
  </TabsList>
</Tabs>


				<ScrollArea className="h-[calc(100vh-10rem)]">
					<div className="grid gap-4">
						{filteredResources.map((resource) => (
							<Card
								key={resource.id}
								className="border-gray-800 bg-gray-900/50"
							>
								<CardHeader className="p-4 pb-2">
									<div className="flex justify-between items-start">
										<div className="flex items-start gap-3">
											<div className="mt-1 p-2 bg-gray-800 rounded-md text-cyan-400">
												{resource.icon}
											</div>
											<div>
												<CardTitle className="text-base">
													{resource.title}
												</CardTitle>
												<CardDescription className="text-xs">
													{resource.description}
												</CardDescription>
											</div>
										</div>
									</div>
								</CardHeader>
								<CardContent className="p-4 pt-2 pb-2">
									<div className="flex flex-wrap gap-2">
										<Badge variant="outline" className="text-xs">
											{resource.category
												.split("-")
												.map(
													(word) => word.charAt(0).toUpperCase() + word.slice(1)
												)
												.join(" ")}
										</Badge>
										<Badge variant="outline" className="text-xs">
											{resource.type.charAt(0).toUpperCase() +
												resource.type.slice(1)}
										</Badge>
										<Badge
											className={`${getDifficultyColor(
												resource.difficulty
											)} text-xs`}
										>
											{resource.difficulty.charAt(0).toUpperCase() +
												resource.difficulty.slice(1)}
										</Badge>
									</div>
								</CardContent>
								<CardFooter className="p-4 pt-2">
									<a
										href={resource.url}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Button size="sm" className="gap-2">
											Visit Resource
											<ExternalLink className="h-4 w-4" />
										</Button>
									</a>
								</CardFooter>
							</Card>
						))}

						{filteredResources.length === 0 && (
							<div className="text-center py-8 text-gray-500">
								<BookOpen className="mx-auto h-12 w-12 mb-4 opacity-50" />
								<p>No resources found matching your criteria.</p>
								<p className="text-sm mt-2">
									Try adjusting your search or filters.
								</p>
							</div>
						)}
					</div>
				</ScrollArea>
			</main>
		</div>
	);
}
