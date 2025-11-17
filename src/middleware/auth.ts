import { Request, Response, NextFunction } from "express";
import { StatusCodes } from "http-status-codes";
import jwt from "jsonwebtoken";

export const authMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const header = req.headers.authorization;
  if (!header) return res.status(StatusCodes.UNAUTHORIZED).json({ error: "Missing token" });

  const token = header.split(" ")[1];
  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as { userId: string };
    req.user = { id: decoded.userId };
    next();
  } catch {
    res.status(StatusCodes.UNAUTHORIZED).json({ error: "Invalid token" });
  }
};
