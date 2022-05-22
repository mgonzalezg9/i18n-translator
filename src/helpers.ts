export const isObject = (value: unknown): value is Record<string, unknown> => {
  return typeof value === "object" && value !== null;
};

export const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));
