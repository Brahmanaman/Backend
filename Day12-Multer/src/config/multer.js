const multer = require("multer")

//FTP

//diskStorage
// const storage = multer.diskStorage({
//     destination: (req, file, cb) => {
//         cb(null, "uploads/")
//     },
//     filename: (req, file, cb) => {
//         cb(null, Date.now() + "-" + file.originalname)
//     }
// })


//memeoryStorage
const storage = multer.memoryStorage();

const upload = multer({
    storage: storage
})


module.exports = upload