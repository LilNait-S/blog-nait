import express from "express";
import { validateToken } from "../auth/auth.middleware";
import {
  createPublicationController,
  deletePublicationController,
  getAllPublicationController,
  getByIdPublicationController,
  updatePublicationController,
} from "./publicaction.controller";
import { validateFormPublication } from "./publication.middleware";

const publicationRouter = express.Router();
const prefix = "/publications";

publicationRouter.get(`${prefix}`, validateToken, getAllPublicationController);
publicationRouter.get(`${prefix}`, validateToken, getByIdPublicationController);
publicationRouter.post(
  `${prefix}`,
  validateFormPublication,
  createPublicationController
);
publicationRouter.delete(
  `${prefix}`,
  validateToken,
  deletePublicationController
);
publicationRouter.patch(
  `${prefix}`,
  validateFormPublication,
  updatePublicationController
);
