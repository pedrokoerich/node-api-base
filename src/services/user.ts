import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma"

export const createUser= async (data: Prisma.UserCreateInput) => {
    try {
        const user = await prisma.user.create({
            data
        })

        return user;

    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === 'P2002') {
                console.error('Email already exists:', data.email);
            } else {
                console.error('Prisma error:', error.message);
            }
        }
        return false
    }
}