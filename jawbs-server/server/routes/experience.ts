import { Router } from "express";
import controller from "../controllers/experience.js";

const experience = Router();

experience.route("/api/experience").post(controller.create);
experience
  .route("/api/experience/:userId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

export default experience;
