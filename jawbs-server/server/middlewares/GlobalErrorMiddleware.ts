import { Request, Response, NextFunction } from "express";
import HttpError from "../libs/HttpError";

const errorMiddleware = (
  error: HttpError,
  ___: Request,
  res: Response,
  __: NextFunction,
) => {
  const statusCode = error.code || 500;
  const message = error.message || "error";
  res.status(error.code).json({
    statusCode,
    message,
  });
};

export default errorMiddleware;
