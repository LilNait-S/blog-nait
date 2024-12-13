import "dotenv/config";

export const envConfig = {
  PORT: Number(process.env.PORT) || 4400,
  JWT_SECRET: process.env.JWT_SECRET || ""
};
