import z from "zod";

export const publicationSchema = z.object({
  title: z.string(),
  content: z.string(),
  user_id: z.number().int().positive(),
});

export type IPublication = z.infer<typeof publicationSchema>;
