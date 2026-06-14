import { Strategy as GoogleStrategy } from "passport-google-oauth20"
import passport from "passport";
import env from "../config/env.js";

export default function googleAuthMiddleware(app) {
    app.use(passport.initialize());

    passport.use(new GoogleStrategy({
        clientID: env.GOOGLE_CLIENT_ID,
        clientSecret: env.GOOGLE_CLIENT_SECRET,
        callbackURL: env.GOOGLE_CALLBACK_URL
    },
        function (accessToken, refreshToken, profile, cb) {
            User.findOrCreate({ googleId: profile.id }, function (err, user) {
                return cb(err, user);
            });
        }
    ));
}
