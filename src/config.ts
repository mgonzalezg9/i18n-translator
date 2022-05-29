import * as dotenv from "dotenv";

dotenv.config();

export default {
  TRANSLATOR_URL: process.env.TRANSLATOR_URL,
  TO: process.env.TO,
  FROM: process.env.FROM,
  OUTPUT_FILE: process.env.OUTPUT_FILE,
  TEST_FILE: process.env.TEST_FILE,
  TEST_KEYS: process.env.TEST_KEYS,
  TEST_TEXT: process.env.TEST_TEXT,
  SEQUENTIAL_VERSION: process.env.SEQUENTIAL_VERSION,
};
