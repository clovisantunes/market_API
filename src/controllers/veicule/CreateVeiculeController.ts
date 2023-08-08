import { Request, Response } from "express";
import { CreateVeiculeService } from "../../services/veicules/CreateVeiculeService";

class CreateVeiculeController {
  async handle(req: Request, res: Response) {
    const {
      name,
      model,
      price,
      description,
      km,
      march,
      year,
      color,
      city,
      category_id,
    } = req.body;

    const createVeiculeService = new CreateVeiculeService();
    if(!req.file){
        throw new Error("Error upload file")
    }else{

        const {originalname, filename } = req.file;
        console.log(filename)
        const veicule = await createVeiculeService.execute({
          name,
          model,
          price,
          description,
          km,
          march,
          year,
          color,
          city,
          banner: "",
          category_id,
        });
        return res.json(veicule)
        
    }
  }
}

export { CreateVeiculeController };
