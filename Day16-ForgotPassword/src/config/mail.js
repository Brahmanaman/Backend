const nodemailer = require("nodemailer");
const config = require("./config")

// Create a transporter using SMTP
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // use STARTTLS (upgrade connection to TLS after connecting)
    auth: {
        user: config.SMTP_USER,
        pass: config.SMTP_PASS,
    },
});

module.exports = transporter