import { translateObject } from "./translation";
// import es from "../data/es.json";
import test from "../data/test.json";
import fs from "fs";
import config from "./config";

const { TO, FROM, OUTPUT_FILE, SEQUENTIAL_VERSION } = config;

const start = Date.now();
console.log(
  `Translating object to '${TO}' from '${FROM}' using ${
    SEQUENTIAL_VERSION ? "sequential" : "parallel"
  } version...`
);

translateObject(test, FROM!, TO!)
  .then((res) => {
    fs.writeFile(OUTPUT_FILE!, JSON.stringify(res), (err: any) => {
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
