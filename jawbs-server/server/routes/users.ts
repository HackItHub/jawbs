import { Router } from "express";
import controller from "../controllers/users.js";

const users = Router();

users.route("/api/users").get(controller.readAll);
users
  .route("/api/users/:id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);
users.route("/api/user/portfolio/:id").get(controller.readPortfolio);

export default users;
