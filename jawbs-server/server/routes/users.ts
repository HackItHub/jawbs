import { Router } from "express";
import controller from "../controllers/users.js";

const users = Router();

users.route("/users").post(controller.create).get(controller.readAll);
users
  .route("/users/:id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);
users.route("/user/portfolio/:id").get(controller.readPortfolio);

export default users;
