import { betterAuth } from "better-auth";

export const auth = betterAuth({
	
	socialProviders: {
		google: {
			clientId: import.meta.env.VITE_GOOGLE_CLIENT_ID || "",
			clientSecret:
				import.meta.env.VITE_GOOGLE_CLIENT_SECRET || "default-client-secret",
		},
		// github: {
		//     clientId: process.env.GITHUB_CLIENT_ID,
		//     clientSecret: process.env.GITHUB_CLIENT_SECRET
		// }
	},
});
