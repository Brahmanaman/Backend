const express = require("express")
const router = express.Router()
const { registerUser, loginUser, resetPassword, forgetPassword, updatePassword } = require("../controllers/auth.controller")


router.post("/register", registerUser)
router.post("/login", loginUser)
router.post("/forget-password", forgetPassword)
router.get("/reset-password/:token", resetPassword)
router.post("/update-password/:userId", updatePassword)

module.exports = router