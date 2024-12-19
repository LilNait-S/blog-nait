import prisma from "../prisma/prisma.config";

export const userRepository = {
  async getUsers() {
    return await prisma.user.findMany();
  },
  async getUser({ id }: { id: number }) {
    return await prisma.user.findUnique({
      where: { id },
    });
  },
  async updateUser({ id, data }: { id: number; data: any }) {
    return await prisma.user.update({
      where: { id },
      data,
    });
  },
  async deleteUser({ id }: { id: number }) {
    return await prisma.user.delete({
      where: { id },
    });
  },
};
