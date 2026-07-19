import { StatusCodes } from "http-status-codes";
import { buildFailureResponse } from "../shared/utils/buildFailureResponse.js";
const ErrorHandler = (err, req, res, next) => {
    const errMessage = err.message;
    const errName = err.name;
    const errstatus = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR
    if (errName == "TokenExpiredError" || errName == "JsonWebTokenError" || errName == "NotBeforeError") {
        return buildFailureResponse(res, "Refresh token expired", StatusCodes.UNAUTHORIZED)
    }
    return buildFailureResponse(res, errMessage, errstatus)
}

export default ErrorHandler