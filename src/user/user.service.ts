import { errorResponse, notFoundResponse, successResponse } from "../common";
import { userRepository } from "./user.repository";

export async function getUsers() {
  try {
    const users = await userRepository.getUsers();
    return successResponse(users, "Users fetched successfully");
  } catch (error) {
    return errorResponse(error, "Error fetching users");
  }
}

export async function getUser({ user_id }: { user_id: number }) {
  try {
    const user = await userRepository.getUser({ id: user_id });
    if (!user) return notFoundResponse(null, "User not found");
    return successResponse(user, "User fetched successfully");
  } catch (error) {
    return errorResponse(error, "Error fetching user");
  }
}

export async function updateUser({
  user_id,
  data,
}: {
  user_id: number;
  data: any;
}) {
  try {
    const userUpdated = await userRepository.updateUser({ id: user_id, data });
    return successResponse(userUpdated, "User updated successfully");
  } catch (error) {
    return errorResponse(error, "Error updating user");
  }
}

export async function deleteUser({ user_id }: { user_id: number }) {
  try {
    await userRepository.deleteUser({ id: user_id });
    return successResponse(null, "User deleted successfully");
  } catch (error) {
    return errorResponse(error, "Error deleting user");
  }
}
