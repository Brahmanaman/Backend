const transpoter = require("../config/mail")
const config = require("../config/config")


const sendMail = (to, subject, html) => {
    let option = {
        from: config.SMTP_USER,
        to,
        subject,
        html
    }

    transpoter.sendMail(option, (err, info) => {
        if (err) {
            console.log(err)
        }
        else {
            console.log(info)
        }
    })
}

module.exports = sendMail