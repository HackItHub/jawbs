import { NextFunction, Request, Response } from "express";
import ClientError from "../libs/client-error.js";

const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- next must be declared for error middleware
  next: NextFunction,
): void => {
  if (err instanceof ClientError) {
    // eslint-disable-next-line
    console.log("reaches");
    res.status(err.status).json({ error: err.message });
  } else {
    // eslint-disable-next-line
    console.error(err);
    res.status(500).json({ error: "an unexpected error occurred" });
  }
};

export default errorMiddleware;
