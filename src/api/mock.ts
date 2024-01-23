import { sleep } from "../helpers";
import { TSentence } from "./types";

const MOCK_WAIT = 1000;

export const translateSentence: TSentence = async () => {
  sleep(MOCK_WAIT);
  return "foo";
};
