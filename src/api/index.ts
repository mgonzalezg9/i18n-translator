import axios from "axios";
import { SERVICE_URL, DEFAULT_PROVIDER } from "../constants";
import { TSentence } from "./types";
import { logTranslation } from "../logging";

let processed = 0;

export const translateSentence: TSentence = async (str, from, to) => {
  try {
    const res = await axios.get(SERVICE_URL, {
      params: {
        query: str,
        source: from,
        target: to,
        provider: DEFAULT_PROVIDER,
      },
    });

    if (!res.data.status) {
      throw new Error("There was an error in translation service");
    }

    const { translation } = res.data;
    logTranslation(str, translation)

    return translation;
  } catch (error) {
    console.error("Error translating string", str);
    return "";
  } finally {
    // if (++processed % 2 === 0) {
    //   logInfo(`Processed ${processed} strings`);
    // }
  }
};
