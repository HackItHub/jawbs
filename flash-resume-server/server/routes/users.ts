import { Router } from "express";
import controller from "../controllers/users.js";

const users = Router();

users.route("/users").post(controller.create);
users
  .route("/users/:id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

export default users;
