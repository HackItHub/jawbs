import path from "path";
import { fileURLToPath } from "url";

const getDirName = function (moduleUrl: string | URL) {
  const filename = fileURLToPath(moduleUrl);
  return path.dirname(filename);
};

export default getDirName;
