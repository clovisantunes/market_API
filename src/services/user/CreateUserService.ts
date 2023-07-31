
interface userClientRequest{
    name: string;
    email: string;
    password: string;
}

class CreateUserService{
    async execute({name, email, password}: userClientRequest){

        return { name: name}
    }
}

export { CreateUserService }