import { StatusCodes } from "http-status-codes"

export const buildFailureResponse = (res, message, statusCode) => {
    return res.status(statusCode || StatusCodes.INTERNAL_SERVER_ERROR).json({
        success: false,
        message
    })
}