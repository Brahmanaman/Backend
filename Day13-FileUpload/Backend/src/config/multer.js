const multer = require("multer")


const storage = multer.memoryStorage();
const upload = multer({
    sotrage: storage
});


module.exports = upload