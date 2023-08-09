import prismaClient from "../../prisma";

interface VeiculesRequest{
    category_id: string;
}

class ListByCategory{
    async execute({category_id}: VeiculesRequest){
        const findByCategory = await prismaClient.veicule.findMany({
            where:{
                category_id: category_id
            }
        })
        return findByCategory;
    }   
}

export { ListByCategory }