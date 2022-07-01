import { translateObject } from "./translation";
import fs from "fs";
import config from "./config";

const { TO, FROM, INPUT_FILE, OUTPUT_FILE, MAX_QUERIES_PER_LEVEL } = config;

if (!TO || !FROM || !INPUT_FILE || !OUTPUT_FILE) {
  console.error("Missing config values");
  process.exit(1);
}

const file = require(INPUT_FILE);

const start = Date.now();
console.log(
  `Translating ${INPUT_FILE} (${
    Object.keys(file).length
  } keys) to '${TO}' from '${FROM}' having ${MAX_QUERIES_PER_LEVEL} queries per level...`
);

translateObject(file, FROM, TO)
  .then((res) => {
    fs.writeFile(OUTPUT_FILE, JSON.stringify(res), (err: any) => {
      if (err) {
        console.error(err);
      }
    });

    const end = Date.now();
    console.log(`Translated object in ${OUTPUT_FILE} taking ${end - start} ms`);
  })
  .catch((err) => {
    console.error("Error translating object", err);
  });
