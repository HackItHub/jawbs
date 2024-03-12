import { Mailer } from "./classes";
import { EMAIL_USERNAME, EMAIL_PASSWORD, EMAIL_HOST, EMAIL_PORT } from "../utils/environmental";
import { MailConfigType } from "../types";

if (!EMAIL_USERNAME || !EMAIL_PASSWORD || !EMAIL_PORT) {
  throw new Error("Email Credentials Needed");
}

const credentials: MailConfigType = {
  auth: {
    pass: EMAIL_PASSWORD,
    user: EMAIL_USERNAME,
  },
  host: EMAIL_HOST,
  port: Number(EMAIL_PORT),
  secure: false,
  requireTLS: true,
  logger: true,
};

// Jawbs Official Email
const mailer = new Mailer(credentials);

export default mailer;
