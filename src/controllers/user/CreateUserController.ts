import { Request, Response } from "express";
import { CreateUserAdminService } from "../../services/user/CreateUserService";

class CreateUserAdminController{
    async handle(req: Request, res: Response){
        const {name, email, password, contact, local, admin} = req.body

        const createUserAdminService= new CreateUserAdminService()

        const user = await createUserAdminService.execute({
            name,
            email,
            password,
            contact,
            local,
            admin
        });
        return res.json(user)
    }
}

export { CreateUserAdminController };