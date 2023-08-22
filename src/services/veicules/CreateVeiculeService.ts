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
  user_id: string;
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
    category_id,
    user_id
  }: ProductRequest) {

    const veicule = await prismaClient.veicule.create({
        data:{
            name: name,
            model: model,
            price: price,
            description: description,
            km: km,
            march: march,
            year: year,
            color: color,
            city: city,
            banner: banner,
            category_id: category_id,
            user_id: user_id
        }
    })
    return veicule
  }
}

export { CreateVeiculeService };
