import z from "zod";

export const publicationSchema = z.object({
  title: z.string(),
  content: z.string(),
  img_path: z.string(),
  user_id: z.number().int().positive(),
});

export type IPublicationSchema = z.infer<typeof publicationSchema>;
