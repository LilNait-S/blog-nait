import { errorResponse, successResponse } from "../common";
import { publicationRepository } from "./publication.repository";
import { IPublicationSchema } from "./publication.schema";

export async function getAllPublicationService() {
  try {
    const publications = await publicationRepository.getAllPublications();
    return successResponse(publications, "Feching successfully");
  } catch (error) {
    return errorResponse(error, "Error to get publications");
  }
}

export async function getByIdPublicationService({
  user_id,
}: {
  user_id: number;
}) {
  try {
    const publication = await publicationRepository.getPublication({
      id: user_id,
    });

    return successResponse(publication, "Publication by id successfully");
  } catch (error) {
    return errorResponse(error, "Error to get by id publication");
  }
}

export async function createPublicationService({
  data,
}: {
  data: IPublicationSchema;
}) {
  try {
    const created = await publicationRepository.createPublication({ data });
    return successResponse(created, "Publication created successfully");
  } catch (error) {
    return errorResponse(error, "Error to create publication");
  }
}

export async function deletePublicationService({
  user_id,
}: {
  user_id: number;
}) {
  try {
    await publicationRepository.deletePublication({ id: user_id });
    return successResponse(null, "Publication deleted successfully");
  } catch (error) {
    return errorResponse(error, "Error to delete publication");
  }
}
export async function updatePublicationService({
  user_id,
  data,
}: {
  user_id: number;
  data: IPublicationSchema;
}) {
  try {
    const updated = await publicationRepository.updatePublication({
      id: user_id,
      data,
    });
    return successResponse(updated, "Publication updated successfully");
  } catch (error) {
    return errorResponse(error, "Error to update publication");
  }
}
