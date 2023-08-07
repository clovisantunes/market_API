import prismaClient from "../../prisma";


class DetailUserService{
    async execute(user_id: string){

        const user = await prismaClient.userAdmin.findFirst({
            where:{
                id: user_id
            }, 
            select:{
                id: true,
                name: true,
                email: true,
                contact: true,
                local: true,
                admin: true,
            }
        })
        return user;
    }
}

export { DetailUserService }