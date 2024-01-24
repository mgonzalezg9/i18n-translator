import chalk from 'chalk'

export const logInfo = (...sentences: unknown[]) => console.log(chalk.blue(sentences));
export const logError = (...sentences: unknown[]) => console.log(chalk.red(sentences));
export const logSuccess = (...sentences: unknown[]) => console.log(chalk.green(sentences));
export const logTranslation = (original: string, translation: string) => console.log(`${original} → ${translation}`);