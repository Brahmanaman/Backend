const express = require("express")
let router = express.Router()
const passport = require("passport")
const jwt = require("jsonwebtoken")


router.get("/google", passport.authenticate("google", { scope: ["profile", "email"], session: false })
)

router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/", session: false }), (req, res) => {
    const token = jwt.sign({ id: req.user._id }, config.SECRET_KEY, { expiresIn: "1h" })
    res.cookie("token", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000
    })
    res.send("user logged in successfully")
})



module.exports = router;


