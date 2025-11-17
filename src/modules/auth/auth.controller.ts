import { Request, Response, NextFunction } from "express";
import { loginUser, registerUser } from "./auth.service";
import { CustomError } from "../../errors/CustomError";
import { StatusCodes } from "http-status-codes";

export const signin = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.json({ token });
  } catch (err) {
    next(err);
  }
};

export const signup = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw new CustomError("Email and password are required", StatusCodes.BAD_REQUEST);
    }
    const user = await registerUser(email, password);
    res.json(user);
  } catch (err) {
    next(err);
  }
};

export const signout = async (_req: Request, res: Response) => {
  res.json({ message: "Signed out successfully" });
};
