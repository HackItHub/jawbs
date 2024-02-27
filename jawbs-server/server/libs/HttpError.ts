import { CustomError } from "ts-custom-error";

class HttpError extends CustomError {
  public constructor(public code: number, message: string) {
    super(message);

    this.code = code;
    this.message = message;

    Error.captureStackTrace(this, this.constructor);
  }
}

export default HttpError;
