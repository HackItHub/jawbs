import { Router } from "express";
import controller from "../controllers/experience.js";

const experience = Router();

experience.route("/experience").post(controller.create);
experience
  .route("/experience/:id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

export default experience;
