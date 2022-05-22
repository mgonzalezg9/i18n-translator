import { sleep } from "../helpers";
import { TranslateStrFunc } from "../types";

const MOCK_WAIT = 1000;

export const translate: TranslateStrFunc = async () => {
  sleep(MOCK_WAIT);
  return "foo";
};
