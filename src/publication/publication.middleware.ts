import { NextFunction, Request, Response } from "express";
import { publicationSchema } from "./publication.schema";

export function validateFormPublication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  try {
    const data = req.body;
    publicationSchema.parse(data);
    next();
  } catch (error) {
    res.status(400).json({ error });
  }
}

