import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";
import { ClientError } from "../libs/classes";
import { privateKey } from "../utils/environmental";

type User = {
  id: string;
  email: string;
};

declare module "express" {
  interface Request {
    user?: User; // Optional user property
  }
}

const verifyToken = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.headers.authorization;

    if (!token) {
      throw new ClientError(401, "no token");
    }

    jwt.verify(token, privateKey, (err, decoded) => {
      if (err) {
        throw new ClientError(403, "invalid token");
      }

      req.user = decoded as User;
      next();
    });
  } catch (err) {
    next(err);
  }
};

export default verifyToken;
