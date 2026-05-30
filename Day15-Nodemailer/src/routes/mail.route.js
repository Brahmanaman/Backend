const express = require("express")
const router = express.Router()
const mailController = require("../controllers/mailController")

router.get("/sendMail", mailController)



module.exports = router