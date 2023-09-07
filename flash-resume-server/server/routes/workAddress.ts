import { Router } from "express";
import controller from "../controllers/workAddress.js";

const workAddress = Router();

workAddress.route("/workAddress").get(controller.list).post(controller.create);
workAddress
  .route("/workAddress/:id")
  .get(controller.read)
  .put(controller.update)
  .delete(controller.destroy);

export default workAddress;
