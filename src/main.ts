import express from "express";
import { envConfig } from "./config/env.config";
import authRouter from "./auth/auth.route";
const app = express();

app.use(express.json());
const globalPrefix = "/api";
app.use(globalPrefix, authRouter);
app.listen(4400, () => {
  console.log(`Server is running on port ${envConfig.PORT}`);
});
