import { Request, Response } from "express";
import { loginService, meService, registerService } from "./auth.service";

export async function loginController(req: Request, res: Response) {
  const response = await loginService(req.body);

  if (response.success) {
    res.status(200).json(response.data);
  } else {
    res.status(401).json({ message: "Error in login" });
  }
}

export async function registerController(req: Request, res: Response) {
  const response = await registerService(req.body);

  if (response.success) {
    res.status(200).json(response.data);
  } else {
    res.status(400).json({ message: "Register failed" });
  }
}

export async function meController(req: Request, res: Response) {
  const token = String(req.headers.authorization?.split(" ")[1]);

  const response = await meService(token);

  if (response.success) {
    res.status(200).json(response.data);
  } else {
    res.status(400).json({ message: "Error in autentication" });
  }
}
