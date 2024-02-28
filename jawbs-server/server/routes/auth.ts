import { Router } from "express";
import controller from "../controllers/auth.js";

const auth = Router();

auth.route("/api/auth/sign-in").post(controller.signIn);
auth.route("/api/auth/sign-up").post(controller.signUp);

export default auth;
