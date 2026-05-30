const sendMail = require("../services/mail.service")
const sendmailController = async (req, res) => {
    await sendMail("kumarimona2122@gmail.com", "love letter", "haan bhai laadli kya hal hai")
    res.send("mail sent")
}

module.exports = sendmailController