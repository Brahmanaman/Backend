import { Router } from "express";
import { register, getMe, refreshToken, logout } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", register)
authRouter.get("/get-me", getMe)
authRouter.post("/refresh-token", refreshToken)
authRouter.post("/logout", logout)

export default authRouter;