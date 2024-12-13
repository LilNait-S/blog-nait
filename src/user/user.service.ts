import { createdResponse, errorResponse, notFoundResponse, successResponse } from "../common";
import prisma from "../prisma/prisma.config";


export async function getUsers() {
  try {
    const users = await prisma.user.findMany();
    return successResponse(users, "Users fetched successfully");
  } catch (error) {
    return errorResponse(error, "Error fetching users");
  } finally {
    await prisma.$disconnect();
  }
}

export async function getUser({ user_id }: { user_id: number }) {
  try {
    const user = await prisma.user.findUnique({
      where: { id: user_id },
    });

    if (!user) return notFoundResponse(null, "User not found");

    return successResponse(user, "User fetched successfully");
  } catch (error) {
    return errorResponse(error, "Error fetching user");
  } finally {
    await prisma.$disconnect();
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
    const userUpdated = await prisma.user.update({
      where: { id: user_id },
      data,
    });

    return successResponse(userUpdated, "User updated successfully");
  } catch (error) {
    return errorResponse(error, "Error updating user");
  } finally {
    await prisma.$disconnect();
  }
}

export async function deleteUser({ user_id }: { user_id: number }) {
  try {
    await prisma.user.delete({
      where: { id: user_id },
    });

    return successResponse(null, "User deleted successfully");
  } catch (error) {
    return errorResponse(error, "Error deleting user");
  } finally {
    await prisma.$disconnect();
  }
}
