import express from "express";
import AuthController from "./auth.controller.js";
import passport from "passport";

const router = express.Router();
const AuthController = new AuthController();

router.get("/google", passport.authenticate("google", { scope: ["email", "profile"], prompt: "select_account" }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "/" }), AuthController.googleCallback.bind(AuthController));

export default router