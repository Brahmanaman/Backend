import { Router } from "express";
import { register, getMe, refreshToken, logout, login } from "../controllers/auth.controller.js";

const authRouter = Router();

authRouter.post("/register", register)
authRouter.post("/login", login)
authRouter.get("/get-me", getMe)
authRouter.post("/refresh-token", refreshToken)
authRouter.post("/logout", logout)

export default authRouter;