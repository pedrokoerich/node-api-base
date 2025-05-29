import { Prisma } from "../generated/prisma";
import { prisma } from "../libs/prisma"

export const createUser= async (data: Prisma.UserCreateInput) => {
    //try {
    //    const user = await prisma.user.create({
    //        data
    //    })

    //    return user;

    //} catch (error) {
    //    if (error instanceof Prisma.PrismaClientKnownRequestError) {
    //        if (error.code === 'P2002') {
    //            console.error('Email already exists:', data.email);
    //        } else {
    //            console.error('Prisma error:', error.message);
    //        }
    //    }
    //    return false
    //}

    const user = await prisma.user.upsert({
        where : {
            email: data.email
        }, 
        update: {
            role: 'ADMIN'
        }, 
        create: data
    })

    return user;
}

export const createUsers = async (users: Prisma.UserCreateInput[]) => {
    try {
        const result = await prisma.user.createMany({
            data: users, skipDuplicates: true
        })

        return result;
    } catch (error) {
        return false;
    }
}

export const getAllUsers = async () => {
    let page = 1

    let skip = (page - 1) * 10; //fórmula para calcular o skip
    const users = await prisma.user.findMany({
        select: {
            id: true,
            name: true,
            email: true,
            status: true,
            _count: {
                select: {
                    posts: true
                }
            }, 
            posts: true
        }, 
        orderBy: {
            name: 'asc'
        }, 
        skip: skip, //pular X usuários
        take: 10 //pegar 10 usuários
        
    })
    return users;
}

export const getUserByEmail = async (email: string) => {
    const user = await prisma.user.findFirst({
        where: {
            email
        },
        select: {
            id: true,
            name: true
        }
    })

    return user
}

export const updateUser = async () => {
    const updatedUser = await prisma.user.update({
        where: {
            email: 'teste@teste.com.br'
        }, data: {
            role: 'ADMIN',
        }
    })

    return updatedUser;
}

export const updateUserMany = async () => {
    const updatedUser = await prisma.user.updateMany({
        where: {
            email: {
                endsWith: '@teste.com.br'
            }
        }, data: {
            status: false,
        }
    })

    return updatedUser;
}