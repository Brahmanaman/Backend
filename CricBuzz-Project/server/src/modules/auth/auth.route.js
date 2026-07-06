import express from "express";
import AuthController from "./auth.controller.js";
import passport from "passport";

const router = express.Router();
const authController = new AuthController();

router.get("/google", passport.authenticate("google", { scope: ["email", "profile"], prompt: "select_account" }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), authController.googleCallback.bind(authController));

export default router