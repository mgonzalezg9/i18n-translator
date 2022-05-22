import { translateObject } from "./translation";
import es from "../data/es.json";

(async function () {
  const result = await translateObject(es, "en");
  console.log(result);
})();
