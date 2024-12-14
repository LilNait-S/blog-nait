import express, { json } from "express";
import { envConfig } from "./config/env.config";
import authRouter from "./auth/auth.route";
import { corsMiddleware } from "./core/middlewares/cors";
import publicationRouter from "./publication/publication.route";
const app = express();

app.use(json());
app.use(corsMiddleware());
const globalPrefix = "/api";
app.use(globalPrefix, authRouter);
app.use(globalPrefix, publicationRouter);
app.listen(4400, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
