export type TranslateStrFunc = (
  str: string,
  from: string,
  to: string
) => Promise<string>;

export type TranslateObjFunc = (
  obj: Record<string, any>,
  from: string,
  to: string
) => Promise<Record<string, any>>;
