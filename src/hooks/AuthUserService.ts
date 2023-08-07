import prismaClient from "../prisma";
import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";

interface AuthRequest {
    email: string;
    password: string;
}

class AuthUserService {
    async execute({ email, password }: AuthRequest) {
       
        const userItem = await prismaClient.userAdmin.findFirst({
            where: {
                email: email
            }
        });

        const user =  userItem;

        if (!user) {
            throw new Error("Usuário/senha incorretos");
        }

        const passwordMatch = await compare(password, user.password);

        if (!passwordMatch) {
            throw new Error("Usuário/senha incorretos");
        }


        const token = sign(
            {
                name:user.name,
                email:user.email
            },
            process.env.JWT_secret,
            {
                subject: user.id,
                expiresIn:'30d'
            }
        )

        return {
            id: user.id,
            name: user.name,
            email: user.email,
            local: user.local,
            contato: user.contact,
            admin: user.admin,
            token: token
         };
    }
}

export { AuthUserService };
