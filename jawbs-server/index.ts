import express from "express";
import { PORT } from "./server/utils/environmental.js";
import {
  users,
  address,
  education,
  experience,
} from "./server/routes/index.js";
import errorMiddleware from "./server/middlewares/error-middlware.js";

const app = express();

app.use(express.json());

app.get("/api", (_, res) => {
  res.status(200).json("Hello World!");
});

app.use(users);
app.use(address);
app.use(education);
app.use(experience);

app.use(errorMiddleware);

app.listen(3001, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT: ${PORT}`);
});
