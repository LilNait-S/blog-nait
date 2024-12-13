import express, { request } from "express";
import {
  validateFormLogin,
  validateFormRegister,
  validateToken,
} from "./auth.middleware";
import {
  loginController,
  meController,
  registerController,
} from "./auth.controller";
const authRouter = express.Router();

const prefix = "/auth";

authRouter.post(`${prefix}/login`, validateFormLogin, loginController);
authRouter.post(`${prefix}/register`, validateFormRegister, registerController);
authRouter.get(`${prefix}/me`, validateToken, meController);

export default authRouter;
