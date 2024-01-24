import { translateObject } from "./translation";
import fs from "fs";
import config from "./config";
import { logError, logInfo, logSuccess } from "./logging";

const { TO, FROM, INPUT_FILE, OUTPUT_FILE, MAX_QUERIES_PER_LEVEL } = config;

if (!TO || !FROM || !INPUT_FILE || !OUTPUT_FILE) {
  console.error("Missing config values");
  process.exit(1);
}

let file;
try {
  file = require('../' + INPUT_FILE);
} catch (error) {
  console.error('Unable to read file', INPUT_FILE);
  process.exit(1);
}

const start = Date.now();
logInfo(
  `Translating ${INPUT_FILE} (${Object.keys(file).length
  } keys) to '${TO}' from '${FROM}' having ${MAX_QUERIES_PER_LEVEL} queries per level...\n`,
);

(async () => {
  try {
    const res = await translateObject(file, FROM, TO);

    fs.writeFile(OUTPUT_FILE, JSON.stringify(res), (err: any) => {
      if (err) {
        console.error(err);
      }
    });

    const end = Date.now();
    logSuccess(`\nTranslated object in ${OUTPUT_FILE} taking ${(end - start) / 1000} s`);
  } catch (error) {
    logError("Error translating object", error);
  }
})();
