import { EventEmitter } from "events";

import { LogLevel, type LogEvent, type LoggerEventMap } from "./types";

/**
 * Abstract class representing a logger.
 */
export default abstract class Logger extends EventEmitter<LoggerEventMap> {
  /**
   * Abstract method to write a log event.
   *
   * @param event - The log event containing the log level and message.
   */
  protected abstract write(event: LogEvent): void;

  /**
   * Logs a message at the debug level.
   *
   * @param args - The message to log.
   * @example
   * logger.debug("This is a debug message.");
   */
  public debug(...args: any[]): void {
    this.log(LogLevel.Debug, args);
  }

  /**
   * Logs a message at the info level.
   *
   * @param args - The message to log.
   */
  public info(...args: any[]): void {
    this.log(LogLevel.Information, args);
  }

  /**
   * Logs a message at the warn level.
   *
   * @param args - The message to log.
   */
  public warn(...args: any[]): void {
    this.log(LogLevel.Warning, args);
  }

  /**
   * Logs a message at the error level.
   *
   * @param args - The message to log.
   */
  public error(...args: any): void {
    this.log(LogLevel.Error, args);
  }

  /**
   * Logs a message at a specified log level.
   * This method creates a log event and emits it.
   *
   * @param level - The log level for the message (e.g., debug, info, warn, error).
   * @param message - The message to log. Can be of any type.
   */
  public log(level: LogLevel, ...args: any[]) {
    const event: LogEvent = { level, args };
    this.write(event);
    this.emit("log", event);
  }
}
