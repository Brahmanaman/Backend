const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routers/auth.routes');

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);


app.use((err, req, res, next) => {
    res.status(err.status || 500).json({ message: err.message || 'internal server error' });
});


module.exports = app;



