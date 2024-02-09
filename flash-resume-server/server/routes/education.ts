import { Router } from "express";
import controller from "../controllers/education.js";

const education = Router();

education.route("/education").post(controller.create);
education
  .route("/education/:userId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

export default education;
