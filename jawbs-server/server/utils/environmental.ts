import fs from "fs";

const privateKey = fs.readFileSync("private.pem", "utf8");

const { DB_HOST, DB_USER, DB_PORT, DB_PASSWORD, DB_REGION, DB_NAME, SECRET_TOKEN, PORT } =
  process.env;

export {
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
  DB_REGION,
  DB_NAME,
  SECRET_TOKEN,
  PORT,
  privateKey,
};
