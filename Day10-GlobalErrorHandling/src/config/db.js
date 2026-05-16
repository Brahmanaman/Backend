const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.DB_URL);
        console.log("database connected");
    }
    catch (err) {
        console.log("error while connection database", err.message);
    }
}

module.exports = connectDB;