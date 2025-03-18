import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";

export default function AdminPage() {
	return (
		<div className="flex min-h-screen items-center justify-center p-4">
			<Card className="w-full max-w-md">
				<CardHeader className="text-center">
					<CardTitle className="text-2xl font-bold">Admin Dashboard</CardTitle>
					<CardDescription>Welcome to the administration area</CardDescription>
				</CardHeader>
				<CardContent className="text-center">
					<p>You are logged in as an administrator.</p>
					<p className="mt-2 text-sm text-muted-foreground">
						This is a secure area. Please ensure you have the proper
						permissions.
					</p>
				</CardContent>
			</Card>
		</div>
	);
}
