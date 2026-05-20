const express = require('express');
const router = express.Router();
const { registerController, loginController } = require("../controllers/auth.controller")

router.post('/register', registerController)
router.post('/login', loginController)
router.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.status(200).json({ message: "User logged out successfully" })
})

module.exports = router;