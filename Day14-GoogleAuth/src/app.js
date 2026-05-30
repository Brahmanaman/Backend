const express = require("express")
const passport = require("passport")
var GoogleStrategy = require('passport-google-oauth20').Strategy;
const config = require("./config/config")
const authRouter = require("./routes/auth.route");
const userModel = require("./models/user.model");
let jwt = require("jsonwebtoken")

const app = express()




app.use(express.json())
app.use(passport.initialize())
passport.use(new GoogleStrategy({
    clientID: config.GOOGLE_CLIENT_ID,
    clientSecret: config.GOOGLE_CLIENT_SECRET,
    callbackURL: config.GOOGLE_CALLBACK_URL
},
    function (accessToken, refreshToken, profile, cb) {
        let name = profile.name.givenName + " " + profile.name.familyName
        let email = profile.emails[0].value

        let user = userModel.findOne({ email })
        if (user) {
            return cb(null, user)
        }
        let newUser = await userModel.create({ name, email, provider: "google", provider_id: profile.id })
        return cb(null, newUser)
    }
))



app.use("/api/auth", authRouter)




module.exports = app;

