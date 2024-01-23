export type TSentence = (
    str: string,
    from: string,
    to: string
) => Promise<string>;