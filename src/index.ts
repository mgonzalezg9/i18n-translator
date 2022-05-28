import { translateObject } from "./translation";
// import es from "../data/es.json";
import test from "../data/test.json";
import fs from "fs";

const to = "en";
const from = "es";
const outputFile = `./data/test.json`;

const start = Date.now();
console.log(`Translating object to '${to}' from '${from}'...`);

translateObject(test, from, to)
  .then((res) => {
    fs.writeFile(outputFile, JSON.stringify(res), (err: any) => {
      if (err) {
        console.error(err);
      }
    });

    const end = Date.now();
    console.log(`Translated object taking ${end - start} ms`);
  })
  .catch((err) => {
    console.error("Error translating object", err);
  });
