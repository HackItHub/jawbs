import path from "path";
import getDirName from "./get-dir-name.js";

const dirname = getDirName(import.meta.url);

const {
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
  DB_REGION,
  DB_NAME,
  SECRET_TOKEN,
  PORT,
} = process.env;

export {
  DB_HOST,
  DB_USER,
  DB_PORT,
  DB_PASSWORD,
  DB_REGION,
  DB_NAME,
  SECRET_TOKEN,
  PORT,
};
