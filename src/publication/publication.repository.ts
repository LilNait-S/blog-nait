import prisma from "../prisma/prisma.config";
import { IPublicationSchema } from "./publication.schema";

export const publicationRepository = {
  async getPublication({ id }: { id: number }) {
    return await prisma.publication.findUnique({
      where: { id },
    });
  },

  async getAllPublications() {
    return await prisma.publication.findMany();
  },

  async createPublication({ data }: { data: IPublicationSchema }) {
    return await prisma.publication.create({ data });
  },

  async deletePublication({ id }: { id: number }) {
    return await prisma.publication.delete({ where: { id } });
  },

  async updatePublication({
    id,
    data,
  }: {
    id: number;
    data: IPublicationSchema;
  }) {
    return await prisma.publication.update({ where: { id }, data });
  },
};
