import { translateObject } from "./translation";
import es from "../data/es.json";

const result = translateObject(es, "en");

console.log(result);
