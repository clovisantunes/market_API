import { hash } from "bcryptjs";
import { UserExist } from "../../hooks/UserExists";
import prismaClient from "../../prisma";

interface userAdminRequest{
    name: string;
    email: string;
    password: string;
    contact: string;
    local: string;
    admin: boolean;
}
class CreateUserAdminService{
    async execute({name, email, password, contact, local, admin}: userAdminRequest){
        await UserExist({ email });
        const passwordHash = await hash(password, 8)
        const userAdmin = await prismaClient.userAdmin.create({
            data:{
                name: name,
                email: email,
                password: passwordHash,
                contact: contact,
                local: local,
                admin: admin
            },
            select:{
                id:true,
                name:true,
                email:true,
                admin: true
            }
        })
        return userAdmin;
    }
}
export { CreateUserAdminService }