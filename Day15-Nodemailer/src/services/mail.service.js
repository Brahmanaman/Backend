const transporter = require("../config/mail")


const sendMail = async (to, subject, text) => {
    let option = {
        from: process.env.SMTP_USER,
        to,
        subject,
        text
    }

    const info = await transporter.sendMail(option)

    console.log(info)
}

module.exports = sendMail