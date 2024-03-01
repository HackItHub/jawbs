import { Router } from "express";
import controller from "../controllers/users.js";

const users = Router();

users.route("/api/users").get(controller.readAll);
users.route("/api/users").get(controller.read).put(controller.update).delete(controller.destroy);
users.route("/api/user/portfolio").get(controller.readPortfolio);

export default users;
