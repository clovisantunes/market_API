import prismaClient from "../../prisma";

interface ItemRequest{
    order_id: string;
    veicule_id:string;
    amount: number;
}

class AddItemService{
    async execute({order_id, veicule_id, amount}: ItemRequest){

        const order = await prismaClient.item.create({
            data:{
                order_id: order_id,
                veicule_id: veicule_id,
                amount
            }
        })

        return order;
    }
}

export { AddItemService }