import { Request, Response } from "express";

import { CreateUserService } from "../../../services/user/userClient/CreateUserService";

class CreateUserController{
    async handle(req: Request, res: Response){
        const {name, email, password} = req.body;
        
        const createUserService = new CreateUserService();

        const userClient = await createUserService.execute({
            name,
            email,
            password
        });

        return res.json(userClient)
    }
}

export { CreateUserController }