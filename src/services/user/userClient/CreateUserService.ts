import { hash } from "bcryptjs";
import { UserExist } from "../../../hooks/UserExists";
import prismaClient from "../../../prisma";


interface userClientRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: userClientRequest){
        await UserExist({ email });

        const passwordHash = await hash(password, 8)
        const userClient = await  prismaClient.userClient.create({
            data:{
                name: name,
                email: email,
                password: passwordHash
            },
            select:{
                id:true,
                name:true,
                email:true
            }

        })

        return userClient;
    }
}

export { CreateUserService }