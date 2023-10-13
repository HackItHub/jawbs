import express from "express";
import { PORT } from "./server/utils/environmental.js";
import {
  users,
  address,
  experience,
  workAddress,
} from "./server/routes/index.js";

const app = express();

app.use(express.json());

app.get("/", (_, res) => {
  res.status(200).json("Hello World!");
});

app.use(users);
app.use(address);
app.use(experience);
app.use(workAddress);

app.listen(PORT || 3001, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on PORT: ${PORT}`);
});

export default app;
