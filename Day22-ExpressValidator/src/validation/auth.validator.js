import { body } from "express-validator"
import { validateRequest } from "../utils/utils.js"

export const registerValidationRules = [
    body("email")
        .toLowerCase()
        .notEmpty().withMessage()
        .isEmail().withMessage("Please provide a valid email address"),

    body("contact")
        .notEmpty().withMessage("Please provide a contact number")
        .isMobilePhone("en-IN").withMessage("Please provide a valid contact number"),

    body("password")
        .notEmpty().withMessage("Please provide a password")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long"),

    validateRequest
]