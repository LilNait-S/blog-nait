import z from "zod";

export const publicationSchema = z.object({
  title: z.string(),
  content: z.string(),
  user_id: z.number().int().positive(),
});

export type IPublication = z.infer<typeof publicationSchema>;

export const publicationUpdateSchema = publicationSchema.partial().extend({
  user_id: z.string(),
});

export type IPublicationUpdate = z.infer<typeof publicationUpdateSchema>;

