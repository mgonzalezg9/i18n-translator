import { writeFile } from "fs";
import config from "../src/config";

// Script for generating JSON files
let json: Record<number, string> = {};
const KEY_NUMBER = parseInt(config.TEST_KEYS || "0");

for (let i = 0; i < KEY_NUMBER; i++) {
  json[i] = config.TEST_TEXT || "Hey there!";
}

writeFile(config.TEST_FILE!, JSON.stringify(json), (err) => {
  if (err) {
    console.error("Error writing file", err);
  }

  console.log(
    `Generated JSON file in ${config.TEST_FILE} with ${KEY_NUMBER} entries`
  );
});
