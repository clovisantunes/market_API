import { Request, Response } from "express";
import { CreateUserAdminService } from "../../services/userAdmin/CreateUserAdminService";

class CreateUserAdminController{
    async handle(req: Request, res: Response){
        const {name, email, password, contact, local} = req.body

        const createUserAdminService= new CreateUserAdminService()

        const userAdmin = await createUserAdminService.execute({
            name,
            email,
            password,
            contact,
            local
        });
        return res.json(userAdmin)
    }
}

export { CreateUserAdminController };