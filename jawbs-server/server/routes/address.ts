import { Router } from "express";
import controller from "../controllers/address.js";

const address = Router();

address.route("/api/address").post(controller.create);
address
  .route("/api/address/:userId")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

export default address;
