import prismaClient from "../prisma";

async function userExists(email: string): Promise<boolean> {
  if (!email) {
    throw new Error("Email incorrect");
  }

  const existingUser = await prismaClient.users.findFirst({
    where: {
      email: email,
    },
  });

  return !!existingUser;
}

export { userExists };
