import { translateObject } from "./translation";
import fs from "fs";
import config from "./config";

const { TO, FROM, INPUT_FILE, OUTPUT_FILE, MAX_PARALLEL_QUERIES } = config;

if (!TO || !FROM || !INPUT_FILE || !OUTPUT_FILE) {
  console.error("Missing config values");
  process.exit(1);
}

const start = Date.now();
console.log(
  `Translating object to '${TO}' from '${FROM}' having ${MAX_PARALLEL_QUERIES} simultaneous queries...`
);

const file = require(INPUT_FILE);
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
