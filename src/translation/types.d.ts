export type TObject = (
  obj: Record<string, any>,
  from: string,
  to: string
) => Promise<Record<string, any>>;
