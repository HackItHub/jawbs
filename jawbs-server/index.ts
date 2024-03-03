import express from "express";
import { PORT, privateKey } from "./server/utils/environmental.js";
import { users, address, education, experience, auth } from "./server/routes/index.js";
import errorMiddleware from "./server/middlewares/error-middlware.js";
import verifyToken from "./server/middlewares/verify-token.js";

const main = () => {
  if (!privateKey) throw new Error("SECRET_TOKEN not found in .env");
  const app = express();

  app.use(express.json());

  app.get("/api", (_, res) => {
    res.status(200).json("Hello World!");
  });

  app.use(errorMiddleware);
  app.use(auth);
  app.use(verifyToken);
  app.use(users);
  app.use(address);
  app.use(education);
  app.use(experience);

  app.listen(PORT || 3001, () => {
    // eslint-disable-next-line no-console
    console.log(`Server running on PORT: ${PORT}`);
  });
};

main();
