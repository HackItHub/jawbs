import { Router } from "express";
import controller from "../controllers/address.js";

const address = Router();

address.route("/address").post(controller.create);
address
  .route("/address/:id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

export default address;
