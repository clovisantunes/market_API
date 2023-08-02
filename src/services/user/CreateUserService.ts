import prismaClient from "../../prisma";


interface userClientRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: userClientRequest){

        if(!email){
            throw new Error("Email incorrect")
        }

        const userAlreadyExists = await prismaClient.user.findFirst({
            where:{
                email: email
            }
        })
        if(userAlreadyExists){
            throw new Error("User already exists")
        }

        const user = await  prismaClient.userClient.create({
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