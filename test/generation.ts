import { writeFile } from "fs";

// Script for generating JSON files
let json: Record<number, string> = {};
const KEY_NUMBER = 100;

for (let i = 0; i < KEY_NUMBER; i++) {
  json[i] = "Bienvenido a la aplicación";
}

writeFile("./data/test.json", JSON.stringify(json), (err) => {
  if (err) {
    console.error("Error writing file", err);
  }
});
