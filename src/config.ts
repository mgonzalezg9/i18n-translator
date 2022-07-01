import * as dotenv from "dotenv";

dotenv.config();

export default {
  TRANSLATOR_URL: process.env.TRANSLATOR_URL,
  TO: process.env.TO,
  FROM: process.env.FROM,
  INPUT_FILE: process.env.INPUT_FILE,
  OUTPUT_FILE: process.env.OUTPUT_FILE,
  TEST_FILE: process.env.TEST_FILE,
  TEST_KEYS: process.env.TEST_KEYS,
  TEST_TEXT: process.env.TEST_TEXT,
  MAX_QUERIES_PER_LEVEL: parseInt(process.env.MAX_QUERIES_PER_LEVEL || "5"),
};
