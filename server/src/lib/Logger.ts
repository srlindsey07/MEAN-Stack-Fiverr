import chalk from 'chalk';

export default class Logger {
    public static log = (args: any) => console.log(chalk.italic(`[LOG]`), 
        typeof args === 'string' ? chalk.italic(args) : args);

    public static info = (args: any) => console.log(chalk.blue(`[INFO]`), 
        typeof args === 'string' ? chalk.blueBright(args) : args);

    public static warn = (args: any) => console.log(chalk.yellow(`[WARN]`),
        typeof args === 'string' ? chalk.yellowBright(args) : args);

    public static error = (args: any) => console.log(chalk.red(`[ERROR]`),
        typeof args === 'string' ? chalk.redBright(args) : args);

    public static success = (args: any) => console.log(chalk.green(`[SUCCESS]`),
        typeof args === 'string' ? chalk.greenBright(args) : args);
}