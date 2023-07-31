interface userAdminRequest{
    name: string;
    email: string;
    password: string;
    contact: string;
    local: string;
}
class CreateUserAdminService{
    async execute({name, email, password, contact, local}: userAdminRequest){
        return {name: name}
    }
}
export { CreateUserAdminService }