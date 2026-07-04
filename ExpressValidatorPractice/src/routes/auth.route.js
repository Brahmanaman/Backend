import { Router } from "express"
import { register } from "../controller/auth.controller.js"
import { authValidator } from "../validation/auth.validation.js"
import { validate } from "../middleware/validate.js"

const authrouter = Router()


authRouter.post("/register", authValidator, validate, register)


export default authRouter 