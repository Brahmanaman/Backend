const express = require('express');
const router = require('./routes/auth.routes');
const homeRouter = require('./routes/home.routes');
const app = express();
const cookieParser = require('cookie-parser');
var cors = require('cors');
const authMiddleware = require('./middleware/auth.middleware');

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true
}))
app.use(express.json());
app.use(cookieParser());
app.use('/api/auth', router);
app.use('/api/home', homeRouter);
app.use('/api/getLoggedInUser', authMiddleware, (req, res) => {
    return res.status(200).json({
        message: "User logged in successfully",
        user: req.user
    })
})

module.exports = app;