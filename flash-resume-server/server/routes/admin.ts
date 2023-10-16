import { Router } from "express";
import controller from "../controllers/users.js";

const admin = Router();

admin.route("/admin/users").get(controller.readAll);

admin.route("/admin/users/:email").delete(controller.destroyByEmail);

export default admin;
