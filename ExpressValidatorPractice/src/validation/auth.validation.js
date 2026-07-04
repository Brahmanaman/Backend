import { body } from "express-validator"

export const authValidator = [
    body("email")
        .normalizeEmail()
        .toLowerCase()
        .notEmpty().withMessage("email address cannot be empty")
        .isEmail().withMessage("Please provide a valid email address"),

    body("password")
        .notEmpty().withMessage("Password cannot be empty")
        .isLength({ min: 6 }).withMessage("Password must be at least 6 characters long")
]