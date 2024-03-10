import { NextFunction, Request, Response } from "express";
import ClientError from "../libs/client-error.js";

const errorMiddleware = (
  err: unknown,
  req: Request,
  res: Response,
  // eslint-disable-next-line
  next: NextFunction,
): void => {
  if (err instanceof ClientError) {
    res.status(err.status).json({ error: err.message });
  } else {
    res.status(500).json({ error: "an unexpected error occurred" });
  }
};

export default errorMiddleware;
