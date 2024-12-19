import { z } from "zod";
import "dotenv/config";

const envSchema = z.object({
  PORT: z.string().regex(/^\d+$/).transform(Number),
  URL_DOMAIN: z.string().url(),
  DATABASE_URL: z.string().min(1),
  JWT_SECRET: z.string().min(1, "JWT_SECRET is required"),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  console.error("❌ Invalid environment variables:", parsedEnv.error.format());
  process.exit(1);
}

export const env = parsedEnv.data;
