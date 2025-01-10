/**
 * Represents various levels of logging.
 */
export enum LogLevel {
  /**
   * Logs that are used for interactive investigation during development.
   * These logs should primarily contain information useful for debugging and have no long-term value.
   */
  Debug = "dbug",

  /**
   * Logs that track the general flow of the application. These logs should have long-term value.
   */
  Information = "info",

  /**
   * Logs that highlight an abnormal or unexpected event in the application flow,
   * but do not otherwise cause the application execution to stop.
   */
  Warning = "warn",

  /**
   * Logs that highlight when the current flow of execution is stopped due to a failure.
   * These should indicate a failure in the current activity, not an application-wide failure.
   */
  Error = "crit",
}

/**
 * Represents a log event.
 */
export interface LogEvent {
  /**
   * The severity level of the log event, indicating its importance and the nature of the message.
   */
  level: LogLevel;

  /**
   * A descriptive message associated with the log event.
   */
  args: any[];
}
