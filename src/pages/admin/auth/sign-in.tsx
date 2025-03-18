import { UserAuthForm } from "../components/user-auth-form";
// import ViteLogo from "@/assets/sign-in.svg";

export default function SignIn() {
	return (
		<>
			<div className="container relative grid h-svh flex-col items-center justify-center lg:max-w-none lg:grid-cols-2 lg:px-0">
				<div className="relative hidden h-full flex-col bg-muted p-10 text-white dark:border-r lg:flex">
					<div className="absolute inset-0 bg-zinc-900" />
					<div className="relative z-20 flex items-center text-lg font-medium">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 24 24"
							fill="none"
							stroke="currentColor"
							strokeWidth="2"
							strokeLinecap="round"
							strokeLinejoin="round"
							className="mr-2 h-6 w-6"
						>
							<path d="M15 6v12a3 3 0 1 0 3-3H6a3 3 0 1 0 3 3V6a3 3 0 1 0-3 3h12a3 3 0 1 0-3-3" />
						</svg>
						Code-Quest Admin Page
					</div>

					{/* <img className="relative m-auto" width={301} height={60} alt="Vite" /> */}

					<div className="relative z-20 mt-auto">
						<blockquote className="space-y-2">
							<p className="text-lg">
								&ldquo;Don't forget to add some description here &rdquo;
							</p>
						</blockquote>
					</div>
				</div>
				<div className="lg:p-8">
					<div className="mx-auto flex w-full flex-col justify-center space-y-2 sm:w-[350px]">
						<div className="flex flex-col space-y-2 text-left">
							<h1 className="text-center text-3xl font-semibold tracking-tight">
								Admin Login
							</h1>
							<p className="text-md text-center text-muted-foreground">
								Enter your email and password below <br />
								to log into your account
							</p>
						</div>
						<UserAuthForm />
					</div>
				</div>
			</div>
		</>
	);
}
