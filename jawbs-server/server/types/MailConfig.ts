type MailConfigType = {
  host?: string;
  port?: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
  logger?: boolean;
  requireTLS: boolean;
};

export default MailConfigType;
