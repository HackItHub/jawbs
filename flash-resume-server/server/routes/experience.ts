import { Router } from "express";
import controller from "../controllers/experience.js";

const experience = Router();

experience.route("/experience").get(controller.list).post(controller.create);
experience
  .route("/experience/:id")
  .get(controller.read)
  .put(controller.update)
  .post(controller.destroy);

export default experience;
