import { publication } from "@prisma/client";

export interface IPublication
  extends Omit<publication, "createdAt" | "updatedAt"> {}
