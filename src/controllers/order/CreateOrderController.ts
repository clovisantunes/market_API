import { Request, Response } from "express";
import { CreateOrderService } from "../../services/order/CreateOrderService";


class CreateOrderController{
    async handle(req: Request, res: Response){
        const {user_id, name} = req.body;

        const createOrderService = new CreateOrderService();


        const order = await createOrderService.execute({
            user_id,
            name
        })
        return res.json(order);
    }
}
export { CreateOrderController }