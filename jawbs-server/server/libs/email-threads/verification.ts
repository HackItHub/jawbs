import mailer from "../mailer";
import { MailType } from "../../types";
import generateVerificationCode from "../../utils/generate-verification-code";
import { HOST } from "../../utils/environmental";

const verificationEmailMessage = (applicantEmail: string) => {
  const verificationToken = generateVerificationCode(132);
  const verificationLink = `http://${HOST}/verify?code=${verificationToken}`;
  const html = `<h1>Hello ${applicantEmail}</h1>
  <div>
    <h2>Let's get started!</h2>
    <div>
      <p>Down below you'll find a link to verify your email so you can continue with signing up!</p>
      <a target="_blank" href="${verificationLink}">${verificationLink}</a>
    </div>
  </div>`;

  const verificationEmailDetails: MailType = {
    to: applicantEmail,
    subject: "Verification",
    html,
  };

  mailer.sendMail(verificationEmailDetails);
};

export default verificationEmailMessage;
