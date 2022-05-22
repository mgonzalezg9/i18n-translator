export type TranslateStrFunc = (str: string, lang: string) => Promise<string>;
export type TranslateObjFunc = (
  obj: Record<string, any>,
  lang: string
) => Promise<Record<string, any>>;
