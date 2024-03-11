import nodemailer, { Transport, Transporter } from "nodemailer";
import { MailType } from "../types";

class Mailer {
  private transporter: Transporter;

  constructor(config: nodemailer.TransportOptions) {
    this.transporter = nodemailer.createTransport(config);
  }

  async sendMail(mailOptions: MailType) {
    try {
      await this.transporter.sendMail(mailOptions);
    } catch (err) {
      // eslint-disable-next-line
      console.log(err);
    }
  }
}

export default Mailer;
