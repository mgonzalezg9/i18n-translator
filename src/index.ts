import { translateObject } from "./translation";
import es from "../data/es.json";
import fs from "fs";
import { translateStr } from "./api/bing";

const from = "es";
const to = "en";
translateObject(es, from, to).then((res) => {
  fs.writeFile(`./data/${to}.json`, JSON.stringify(res), (err: any) => {
    if (err) {
      console.error(err);
    }
  });
});
