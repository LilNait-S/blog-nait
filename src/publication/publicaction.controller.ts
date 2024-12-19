import { Request, Response } from "express";
import {
  createPublicationService,
  deletePublicationService,
  getAllPublicationService,
  getByIdPublicationService,
  updatePublicationService,
} from "./publication.service";

export async function uploadImgPublicationController(
  req: Request,
  res: Response
) {
  res.status(200).json({
    message: "File upload succesfully",
    file: req.file as Express.Multer.File,
  });
}

export async function getAllPublicationController(_: Request, res: Response) {
  console.log("start");
  const response = await getAllPublicationService();
  console.log("response", response);
  if (response.success) {
    res.status(response.statusCode).json(response.data);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}

export async function getByIdPublicationController(
  req: Request,
  res: Response
) {
  const response = await getByIdPublicationService({ user_id: +req.params.id });
  if (response.success) {
    res.status(response.statusCode).json(response.data);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}

export async function createPublicationController(req: Request, res: Response) {
  const response = await createPublicationService({ data: req.body });
  if (response.success) {
    res.status(response.statusCode).json(response.data);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}

export async function deletePublicationController(req: Request, res: Response) {
  const response = await deletePublicationService({ user_id: +req.params.id });
  if (response.success) {
    res.status(response.statusCode).json(response.message);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}

export async function updatePublicationController(req: Request, res: Response) {
  const response = await updatePublicationService({
    data: req.body,
    user_id: +req.params.id,
  });
  if (response.success) {
    res.status(response.statusCode).json(response.data);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}
