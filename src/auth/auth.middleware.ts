import { NextFunction, Request, Response } from "express";
import { loginSchema, registerSchema } from "./auth.schema";

export function validateFormLogin(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    loginSchema.parse(data);
    next();
  } catch (error) {
    res.status(400).json({ error });
  }
}

export function validateFormRegister(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    registerSchema.parse(data);
    next();
  } catch (error) {
    res.status(400).json({ error });
  }
}

export function validateToken(req: Request, res: Response, next: NextFunction) {
  const token = String(req.headers.authorization?.split(" ")[1]);
  if (!token) {
    res.status(401).json({ message: "Unauthorized" });
  } else {
    next();
  }
}
