import prismaClient from "../../prisma";

interface ProductRequest {
  name: string;
  model: string;
  price: string;
  description: string;
  km: string;
  march: string;
  year: string;
  color: string;
  city: string;
  banner: string;
  category_id: string;
}

class CreateVeiculeService {
  async execute({
    name,
    model,
    price,
    description,
    km,
    march,
    year,
    color,
    city,
    banner,
    category_id
  }) {
    return { ok: true}
  }
}

export { CreateVeiculeService };
