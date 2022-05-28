import axios from "axios";
import { TranslateStrFunc } from "../types";

const LOCAL_URL = "http://localhost:3000/translate";
export const translateStr: TranslateStrFunc = async (str, from, to) => {
  const res = await axios.get(LOCAL_URL, {
    params: {
      query: str,
      source: from,
      target: to,
    },
  });
  return res.data;
};
