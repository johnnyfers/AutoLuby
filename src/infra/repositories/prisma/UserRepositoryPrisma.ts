import { PrismaClient } from "@prisma/client";
import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";

export class UserRepositoryPrisma implements UserRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }


    async save(user: User): Promise<void> {
        await this.prisma.user.create({
            data: user
        })
    }

    async softDelete(id: string): Promise<void> {
        await this.prisma.user.update({
            where: {
                id: id
            },
            data: {
                isActive: false
            }
        })
    }

    async findByemail(email: string): Promise<User> {
        return await this.prisma.user.findFirst({
            where: {
                email: email,
            }
        })
    }
}