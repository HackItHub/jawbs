import { Router } from "express";
import controller from "./controller.js";

const router = Router();

router.route("/users").get(controller.list).post(controller.create);
router
  .route("/users/:email")
  .get(controller.read)
  .put(controller.update)
  .post(controller.destroy);

export default router;
