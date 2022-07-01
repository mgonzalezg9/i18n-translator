import { translateStr } from "../api/service";
import config from "../config";
import { isObject } from "../helpers";
import { TranslateObjFunc } from "../types";

export const translateObject: TranslateObjFunc = async (obj, from, to) => {
  const keys: (keyof typeof obj)[] = Object.keys(obj);
  const result: Record<string, any> = {};
  let promises: { key: keyof typeof obj; promise: Promise<any> }[] = [];

  for (let i = 0; i < keys.length; i++) {
    const k = keys[i];
    const translateFunc = isObject(obj[k]) ? translateObject : translateStr;

    promises.push({
      key: k,
      promise: translateFunc(obj[k], from, to),
    });

    // We also must wait for the latests promises to finish
    if (
      promises.length === config.MAX_QUERIES_PER_LEVEL ||
      keys.length - i > config.MAX_QUERIES_PER_LEVEL
    ) {
      const solvedPromises = await Promise.all(
        promises.map(({ promise }) => promise)
      );

      // Combines the solved children
      for (let j = 0; j < promises.length; j++) {
        result[promises[j].key] = solvedPromises[j];
      }
      promises = [];
    }
  }

  return result;
};
