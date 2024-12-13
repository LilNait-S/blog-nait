import { Request, Response } from "express";
import { getUser, getUsers } from "./user.service";

export async function userGetAll(_: Request, res: Response) {
  const response = await getUsers();
  if (response.success) {
    res.status(200).json(response.data);
  } else {
    res.status(400).json({ message: "Error to get all users" });
  }
}

export async function userGetById(req: Request, res: Response) {
  const response = await getUser({ user_id: +req.params });
  if (response.success) {
    res.status(200).json(response.data);
  } else {
    res.status(400).json({ message: "Error to get user by id" });
  }
}
