import { Router } from "express"
import { register } from "../controllers/auth.controller.js"
import { registerValidationRules } from "../validation/auth.validator.js"
const authRouter = Router()


/** 
 * @route POST /register
 * @description register user
 * @argument  {req.body.email} -- User's email
 * @argument  {req.body.password} -- User's password
 * @argument  {req.body.contact} -- contact
 * @access public 
 */
authRouter.post("/register", registerValidationRules, register)


export default authRouter