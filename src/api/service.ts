import axios from "axios";
import config from "../config";
import { TranslateStrFunc } from "../types";

const SERVICE_URL = `${config.TRANSLATOR_URL}/translate`;
export const translateStr: TranslateStrFunc = async (str, from, to) => {
  try {
    const res = await axios.get(SERVICE_URL, {
      params: {
        query: str,
        source: from,
        target: to,
      },
    });

    if (!res.data.status) {
      throw new Error("There was an error in translation service");
    }

    return res.data.translation;
  } catch (error) {
    console.error("Error translating string", str);
    return "";
  }
};
