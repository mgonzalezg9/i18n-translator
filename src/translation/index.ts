import { isObject } from "../helpers";

const translateString = (str: string, lang: string): string => {
  return str + lang;
};

export const translateObject = (
  obj: Record<string, any>,
  lang: string
): Record<string, any> => {
  const result: Record<string, any> = {};

  Object.keys(obj).forEach((key) => {
    const translateFunc = isObject(obj[key as keyof typeof obj])
      ? translateObject
      : translateString;
    result[key] = translateFunc(obj[key as keyof typeof obj], lang);
  });

  return result;
};
