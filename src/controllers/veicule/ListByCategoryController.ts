import { Request, Response } from "express";
import { ListByCategory } from "../../services/veicules/ListByCategory";

class ListByCategoryController {
  async handle(req: Request, res: Response) {
    const category_id = req.query.category_id as string;

    const listByCategory = new ListByCategory();

    const veicules = await listByCategory.execute({
      category_id,
    });
    return res.json(veicules)
  }
}

export { ListByCategoryController };
