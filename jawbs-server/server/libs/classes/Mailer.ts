import nodemailer, { Transporter } from "nodemailer";
import { MailType } from "../../types";
import generateVerificationCode from "../../utils/generate-verification-code";

class Mailer {
  private transporter: Transporter;

  constructor(config: nodemailer.TransportOptions) {
    this.transporter = nodemailer.createTransport(config);
  }

  // Mail should have a uniqueId that isn't in the database sent to the user
  // It should check the database if that email exists if it does then send the email, if it doesn't then keep trying for another unique verification code while loops
  // Send mail to user

  async sendMail(mailOptions: MailType) {
    try {
      const subject = `${mailOptions.subject} #${generateVerificationCode(8)}`;
      await this.transporter.sendMail({ ...mailOptions, subject });
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  }
}

export default Mailer;
