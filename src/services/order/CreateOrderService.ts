import prismaClient from "../../prisma";

interface OrderRequest{
    user_id: string;
    name: string;
}

class CreateOrderService{
    async execute({ user_id, name }: OrderRequest){
        const order = await prismaClient.order.create({
            data:{
                user_id: user_id,
                name: name
            }
        })
        return order;
    }
}

export { CreateOrderService }