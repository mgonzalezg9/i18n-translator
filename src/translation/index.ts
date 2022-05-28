import { translateStr } from "../api/local";
import { isObject } from "../helpers";
import { TranslateObjFunc } from "../types";

export const translateObject: TranslateObjFunc = async (obj, from, to) => {
  const keys = Object.keys(obj);
  const promises: Promise<any>[] = [];

  // Solves each child
  keys.forEach((k) => {
    const translateFunc = isObject(obj[k as keyof typeof obj])
      ? translateObject
      : translateStr;
    promises.push(translateFunc(obj[k as keyof typeof obj], from, to));
  });
  const solvedPromises = await Promise.all(promises);

  // Combines the solved children
  const result: Record<string, any> = {};
  for (let i = 0; i < keys.length; i++) {
    result[keys[i]] = solvedPromises[i];
  }
  return result;
};
