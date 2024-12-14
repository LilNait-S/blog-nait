import { errorResponse, successResponse } from "../common";
import prisma from "../prisma/prisma.config";
import { IPublication } from "./publication.schema";

export async function getAllPublicationService() {
  try {
    const publications = await prisma.publication.findMany();
    return successResponse(publications, "Feching successfully");
  } catch (error) {
    return errorResponse(error, "Error to get publications");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getByIdPublicationService({
  user_id,
}: {
  user_id: number;
}) {
  try {
    const publication = await prisma.publication.findUnique({
      where: { id: user_id },
    });

    console.log(publication);

    return successResponse(publication, "Publication by id successfully");
  } catch (error) {
    return errorResponse(error, "Error to get by id publication");
  } finally {
    await prisma.$disconnect();
  }
}

export async function createPublicationService({
  input,
}: {
  input: IPublication;
}) {
  try {
    const created = await prisma.publication.create({ data: input });
    return successResponse(created, "Publication created successfully");
  } catch (error) {
    return errorResponse(error, "Error to create publication");
  } finally {
    await prisma.$disconnect();
  }
}

export async function deletePublicationService({
  user_id,
}: {
  user_id: number;
}) {
  try {
    await prisma.publication.delete({ where: { id: user_id } });
    return successResponse(null, "Publication deleted successfully");
  } catch (error) {
    return errorResponse(error, "Error to delete publication");
  } finally {
    await prisma.$disconnect();
  }
}
export async function updatePublicationService({
  user_id,
  input,
}: {
  user_id: number;
  input: IPublication;
}) {
  try {
    const updated = await prisma.publication.update({
      where: { id: user_id },
      data: input,
    });
    return successResponse(updated, "Publication updated successfully");
  } catch (error) {
    return errorResponse(error, "Error to update publication");
  } finally {
    await prisma.$disconnect();
  }
}
