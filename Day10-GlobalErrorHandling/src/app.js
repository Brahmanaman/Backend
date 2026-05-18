const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
const authRoutes = require('./routers/auth.routes');
const errorMiddleware = require('./middlewares/error.middleware');

app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);


app.use(errorMiddleware);


module.exports = app;



