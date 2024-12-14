import express from "express";
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

export default publicationRouter