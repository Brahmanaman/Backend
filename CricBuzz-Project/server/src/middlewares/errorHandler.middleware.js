import { buildFailureResponse } from "../shared/utils/buildFailureResponse.js";
const ErrorHandler = (err, req, res, next) => {
    const errMessage = err.message;
    const errName = err.name;
    const errstatus = err.statusCode
    return buildFailureResponse(res, errMessage, errstatus)
}

export default ErrorHandler