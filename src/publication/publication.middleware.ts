import { NextFunction, Request, Response } from "express";
import { publicationSchema } from "./publication.schema";
import multer, { FileFilterCallback } from "multer";
import path from "path";
import crypto from "crypto";
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

export function validateFormUpdatePublication(
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

const storage = multer.diskStorage({
  destination: path.join(__dirname, "../uploads"),
  filename: function (
    _: Request,
    file: Express.Multer.File,
    cb: (err: Error | null, destination: string) => void
  ) {
    const uuid = crypto.randomUUID();
    cb(
      null,
      uuid + file.originalname.substring(file.originalname.lastIndexOf("."))
    );
  },
});

function fileFilter(
  _: Request,
  file: Express.Multer.File,
  cb: FileFilterCallback
) {
  const fileTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif"];
  if (fileTypes.some((fileType) => fileType === file.mimetype)) {
    return cb(null, true);
  }
  return cb(null, false);
}

const maxSize = 5 * 1024 * 1024;

export function validateImagePublication(
  req: Request,
  res: Response,
  next: NextFunction
) {
  return multer({
    storage,
    limits: {
      fileSize: maxSize,
    },
    fileFilter,
  }).single("file")(req, res, (err) => {
    if (err instanceof multer.MulterError) {
      return res.status(400).json({ message: `Multer error: ${err.message}` });
    }

    if (err) {
      return res.status(400).json({ message: `Error: ${err.message}` });
    }

    if (!req.file) {
      return res.status(400).json({
        message:
          "No file uploaded or invalid file type. Accepted formats: jpg, jpeg, png, gif",
      });
    }

    next();
  });
}
