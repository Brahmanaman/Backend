import express from "express";
import AuthController from "./auth.controller.js";
import passport from "passport";
import { asyncHandler } from "../../../shared/utils/asyncHandler.js";

const router = express.Router();
const authController = new AuthController();

router.get("/google", passport.authenticate("google", { scope: ["email", "profile"], prompt: "select_account", session: false }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/", session: false }), asyncHandler(authController.googleCallback.bind(authController)));

export default router