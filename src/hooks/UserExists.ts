import prismaClient from "../prisma"

type userEmail ={
    email:string
}

async function UserExist({email}: userEmail){
    if(!email){
        throw new Error("Email incorrect")
    }
    const userAlreadyExists = await prismaClient.userAdmin.findFirst({
        where:{
            email: email
        }
    })

    if(userAlreadyExists ){
        throw new Error("User already exists")
    }
}

export {UserExist};