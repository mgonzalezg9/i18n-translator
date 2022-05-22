import { TranslateStrFunc } from "../types";
import { translate } from "bing-translate-api";

export const translateStr: TranslateStrFunc = async (str, from, to) => {
  try {
    const res = translate(str.slice(0, 50), from, to);
    return res.translation;
  } catch (error) {
    return "";
  }
};
