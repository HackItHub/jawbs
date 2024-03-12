import nodemailer from "nodemailer";
import { MailType } from "../../types";
import ClientError from "./ClientError";
import generateVerificationCode from "../../utils/generate-verification-code";

class Mailer {
  private transporter;

  private email;

  // Set up config for multiple accounts if needed
  constructor(config: any) {
    this.transporter = nodemailer.createTransport(config);
    this.email = config.auth.user;
  }

  async createLocalConnection() {
    const account = await nodemailer.createTestAccount();
    this.transporter = nodemailer.createTransport({
      host: account.smtp.host,
      port: account.smtp.port,
      secure: account.smtp.secure,
      auth: {
        user: account.user,
        pass: account.pass,
      },
    });
  }

  // Create basic functions for receiving mail
  // Mail should have a uniqueId that isn't in the database sent to the user
  // It should check the database if that email exists if it does then send the email, if it doesn't then keep trying for another unique verification code while loops
  // Send mail to user

  async sendMail(mailOptions: MailType) {
    try {
      const subject = `${mailOptions.subject} #${generateVerificationCode(8)}`;
      const mail = await this.transporter.sendMail({ ...mailOptions, subject, from: this.email });
      return mail;
    } catch (err) {
      if (err) {
        const clientError = new ClientError(500, "Something went wrong");
        return clientError;
      }
    }
    return "success";
  }
}

export default Mailer;
