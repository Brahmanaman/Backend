import authRouter from "./auth.routes.js"
import { Router } from "express"


const router = Router()

/**
 * mounting auth routes
 */
router.use("/auth", authRouter)

export default router