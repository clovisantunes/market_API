import { UserExist } from "../../hooks/UserExists";
import prismaClient from "../../prisma";


interface userClientRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: userClientRequest){
        await UserExist({ email });

        const userClient = await  prismaClient.userClient.create({
            data:{
                name: name,
                email: email,
                password: password
            }
        })

        return { name: name}
    }
}

export { CreateUserService }