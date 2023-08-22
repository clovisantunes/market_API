import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService";

class AdditemController{
    async handle(req: Request, res: Response){
        const {order_id, veicule_id, amount} = req.body;


        const additem = new AddItemService();

        const order = await additem.execute({
            order_id,
            veicule_id,
            amount
        })

        return res.json(order)
    }
}

export { AdditemController }