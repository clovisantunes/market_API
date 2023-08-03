import { UserExist } from "../../hooks/UserExists";
import prismaClient from "../../prisma";

interface userAdminRequest{
    name: string;
    email: string;
    password: string;
    contact: string;
    local: string;
}
class CreateUserAdminService{
    async execute({name, email, password, contact, local}: userAdminRequest){
        await UserExist({ email });

        const userAdmin = await prismaClient.userAdmin.create({
            data:{
                name: name,
                email: email,
                password: password,
                contact: contact,
                local: local
            }
        })
        return {name: name}
    }
}
export { CreateUserAdminService }