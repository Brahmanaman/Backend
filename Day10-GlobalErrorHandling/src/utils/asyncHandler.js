const asyncHandler = (requestHandler) => {
    return (req, res, next) => {
        Promise.resolve(requestHandler(req, res)).catch((error) => {
              (error);
        })
    }
}

module.exports = asyncHandler;