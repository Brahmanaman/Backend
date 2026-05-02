// Module Imports
let mongoose = require('mongoose');

let connectDB = async () => {
    try {
        let db = await mongoose.connect('mongodb+srv://aman:aman123@test-cluster.gykfeeq.mongodb.net/');
        console.log(`Database connected at host: ${db.connection.host}`);
    } catch (error) {
        console.log("Error in ConnectDB:", error.message);
    }
}

module.exports = connectDB;