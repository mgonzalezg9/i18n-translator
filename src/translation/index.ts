import { translateStr } from "../api/service";
import config from "../config";
import { isObject } from "../helpers";
import { TranslateObjFunc } from "../types";

export const translateObject: TranslateObjFunc = async (obj, from, to) => {
  const keys = Object.keys(obj);
  const result: Record<string, any> = {};
  const promises: Promise<any>[] = [];

  if (config.SEQUENTIAL_VERSION) {
    for (let i = 0; i < keys.length; i++) {
      const k = keys[i];
      const translateFunc = isObject(obj[k as keyof typeof obj])
        ? translateObject
        : translateStr;
      result[k] = await translateFunc(obj[k as keyof typeof obj], from, to);
    }
  } else {
    // Solves each child
    keys.forEach((k) => {
      const translateFunc = isObject(obj[k as keyof typeof obj])
        ? translateObject
        : translateStr;
      promises.push(translateFunc(obj[k as keyof typeof obj], from, to));
    });
    const solvedPromises = await Promise.all(promises);

    // Combines the solved children
    for (let i = 0; i < keys.length; i++) {
      result[keys[i]] = solvedPromises[i];
    }
  }

  return result;
};
