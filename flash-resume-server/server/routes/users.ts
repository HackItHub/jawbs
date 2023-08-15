import { Router } from "express";
import controller from "../controllers/users.js";

const users = Router();

users.route("/users").get(controller.list).post(controller.create);
users
  .route("/users/:email")
  .get(controller.read)
  .put(controller.update)
  .post(controller.destroy);

export default users;
