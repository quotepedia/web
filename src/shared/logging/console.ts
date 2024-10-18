import colors from "picocolors";

import Logger from "./logger";
import { LogLevel, type LogEvent } from "./types";

export const DISPATCHERS: Record<LogLevel, (args: any[]) => void> = {
  dbug: console.debug,
  info: console.info,
  warn: console.warn,
  crit: console.error,
};

export const STYLES: Record<LogLevel, (message: any) => string> = {
  dbug: colors.gray,
  info: colors.green,
  warn: colors.yellow,
  crit: colors.red,
};

export class ConsoleLogger extends Logger {
  protected override write(event: LogEvent): void {
    const message = this.format(event);
    DISPATCHERS[event.level](message);
  }

  protected format(event: LogEvent): any {
    const timestamp = colors.dim(new Date().toLocaleTimeString());
    const severity = colors.bold(STYLES[event.level](`[${event.level}]`));
    const args = event.args.join(" ");
    return `${timestamp} ${severity} ${args}`;
  }
}

export const logger = new ConsoleLogger();

export default logger;
