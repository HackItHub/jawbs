import mailer from "../mailer";
import { ClientError } from "../classes";
import { MailType } from "../../types";
import generateVerificationCode from "../../utils/generate-verification-code";
import { HOST } from "../../utils/environmental";

const verificationEmailMessage = (applicantEmail: string) => {
  const oneTimeVerificationToken = generateVerificationCode(132);
  const oneTimeDeleteToken = generateVerificationCode(132);
  const verificationLink = `http://${HOST}/verify?code=${oneTimeVerificationToken}`;
  const deleteAccountLink = `http://${HOST}/delete?code=${oneTimeDeleteToken}`;
  const html = `<h1>Hello ${applicantEmail}</h1>
  <div>
    <h2>Let's get started!</h2>
    <div>
      <p>Click the link below to verify your email so you can continue with signing up!</p>
      <a target="_blank" href="${verificationLink}">${verificationLink}</a>
      <p>Oops? Not sure how you got this email? If this wasn't you please click the link below to be removed from our records</p>
      <a target="_blank" href="${deleteAccountLink}>${deleteAccountLink}</a>
    </div>
  </div>`;

  const verificationEmailDetails: MailType = {
    to: applicantEmail,
    subject: "Verification",
    html,
  };

  try {
    mailer.sendMail(verificationEmailDetails);
    return true;
  } catch (err) {
    const error = new ClientError(500, "Something went wrong");
    return error;
  }
};

export default verificationEmailMessage;
