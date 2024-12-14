import { Request, Response } from "express";

interface PublicationModel {
  getAll(): Promise<any[]>;
  getById(params: { id: number }): Promise<any | null>;
  create(params: { data: any }): Promise<any>;
  delete(params: { id: number }): Promise<boolean>;
  update(params: { id: number; data: any }): Promise<any>;
}

export class PublicationController {
  private publicationModel: PublicationModel;

  constructor({ publicationModel }: { publicationModel: PublicationModel }) {
    this.publicationModel = publicationModel;
  }

  getAll = async (_: Request, res: Response) => {
    const publications = await this.publicationModel.getAll();
    res.json(publications);
  };

  getById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const publication = await this.publicationModel.getById({
      id: parseInt(id),
    });
    if (publication) return res.json(publication);
    res.status(404).json({ message: "Publication not found" });
  };

  create = async (req: Request, res: Response) => {
    const newPublication = await this.publicationModel.create(req.body);

    res.status(201).json(newPublication);
  };

  delete = async (req: Request, res: Response) => {
    const { id } = req.params;

    const result = await this.publicationModel.delete({ id: parseInt(id) });

    if (!result) {
      return res.status(404).json({ message: "Publication not found" });
    }

    return res.json({ message: "Publication deleted" });
  };

  update = async (req: Request, res: Response) => {
    const { id } = req.params;

    const updatedPublication = await this.publicationModel.update({
      id: parseInt(id),
      data: req.body,
    });

    return res.json(updatedPublication);
  };
}
