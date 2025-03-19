var GoogleStrategy = require("passport-google-oauth2").Strategy;

passport.use(
	new GoogleStrategy(
		{
			clientID: import.meta.env.VITE_GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.VITE_GOOGLE_CLIENT_SECRET,
			callbackURL: "http://localhost:5173/auth/google/callback",
			passReqToCallback: true,
		},
		function (request, accessToken, refreshToken, profile, done) {
			User.findOrCreate({ googleId: profile.id }, function (err, user) {
				return done(err, user);
			});
		}
	)
);
