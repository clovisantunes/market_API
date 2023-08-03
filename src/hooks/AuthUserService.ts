import prismaClient from "../prisma";
import { compare } from "bcryptjs";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
        const userClient = await prismaClient.userClient.findFirst({
            where: {
                email: email
            }
        });

        const userAdmin = await prismaClient.userAdmin.findFirst({
            where: {
                email: email
            }
        });

        const user = userClient || userAdmin;

        if (!user) {
            throw new Error("Usuário/senha incorretos");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Usuário/senha incorretos");
        }

        return { ok: true };
    }
}

export { AuthUserService };
