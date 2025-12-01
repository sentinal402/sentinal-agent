/* Minimal logger placeholder. Replace with structured logger (pino/winston) later. */
export type LogLevel = "debug" | "info" | "warn" | "error";

const log = (level: LogLevel, message: string, meta?: Record<string, unknown>): void => {
  const payload = meta ? `${message} | ${JSON.stringify(meta)}` : message;
  // eslint-disable-next-line no-console
  console[level](`[${new Date().toISOString()}] [${level.toUpperCase()}] ${payload}`);
};

export const logger = {
  debug: (message: string, meta?: Record<string, unknown>) => log("debug", message, meta),
  info: (message: string, meta?: Record<string, unknown>) => log("info", message, meta),
  warn: (message: string, meta?: Record<string, unknown>) => log("warn", message, meta),
  error: (message: string, meta?: Record<string, unknown>) => log("error", message, meta),
  silly: (message: string) => log("debug", `[silly] ${message}`)
};
