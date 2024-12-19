import { Router } from "express";
import {
  createPublicationController,
  deletePublicationController,
  getAllPublicationController,
  getByIdPublicationController,
  updatePublicationController,
  uploadImgPublicationController,
} from "./publicaction.controller";
import {
  validateFormPublication,
  validateImagePublication,
} from "./publication.middleware";

const publicationRouter = Router();
const prefix = "/publications";

publicationRouter.post(
  `${prefix}/image`,
  validateImagePublication,
  uploadImgPublicationController
);

publicationRouter.get(`${prefix}`, getAllPublicationController);
publicationRouter.get(`${prefix}/:id`, getByIdPublicationController);
publicationRouter.post(
  `${prefix}`,
  validateFormPublication,
  createPublicationController
);
publicationRouter.delete(`${prefix}/:id`, deletePublicationController);
publicationRouter.patch(
  `${prefix}/:id`,
  validateFormPublication,
  updatePublicationController
);

export default publicationRouter;
