const errorMiddleware = (error, req, res, next) => {
    return res.status(error.status || 500).json({ message: error.message || 'internal server error', success: false });
}

module.exports = errorMiddleware