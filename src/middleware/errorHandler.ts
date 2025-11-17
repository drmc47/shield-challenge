import { CustomError } from "../errors/CustomError";
import { Request, Response, NextFunction } from "express";

export const errorHandler = (err: unknown, _req: Request, res: Response, _next: NextFunction) => {
  console.error(err);

  if (err instanceof CustomError) {
    return res.status(err.statusCode).json({
      error: err.message,
    });
  }

  if (err instanceof Error) {
    return res.status(500).json({
      error: err.message,
    });
  }

  return res.status(500).json({
    error: "Internal server error",
  });
};
