import { Request, Response } from "express";
import {
  createPublicationService,
  deletePublicationService,
  getAllPublicationService,
  getByIdPublicationService,
  updatePublicationService,
} from "./publication.service";

export async function getAllPublicationController(_: Request, res: Response) {
  const response = await getAllPublicationService();
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
  console.log(req.params);
  const response = await getByIdPublicationService({ user_id: +req.params.id });
  if (response.success) {
    res.status(response.statusCode).json(response.data);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}
export async function createPublicationController(req: Request, res: Response) {
  const response = await createPublicationService({ input: req.body });
  if (response.success) {
    res.status(response.statusCode).json(response.data);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}
export async function deletePublicationController(req: Request, res: Response) {
  const response = await deletePublicationService({ user_id: +req.params.id });
  if (response.success) {
    res.status(response.statusCode).json(response.data);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}
export async function updatePublicationController(req: Request, res: Response) {
  const response = await updatePublicationService({
    input: req.body,
    user_id: +req.params.id,
  });
  if (response.success) {
    res.status(response.statusCode).json(response.data);
  } else {
    res.status(response.statusCode).json({ message: response.data });
  }
}
