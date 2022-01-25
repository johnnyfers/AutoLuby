import { PrismaClient } from "@prisma/client";
import { Admin } from "../../../domain/entities/Admin";
import { AdminRepository } from "../../../domain/repositories/AdminRepository";

export class AdminRepositoryPrisma implements AdminRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async save(admin: Admin): Promise<void> {
        await this.prisma.admin.create({
            data: {
                id: admin.id,
                userId: admin.user.id
            }
        })
    }

    async findByUserId(userId: string): Promise<Admin> {
        return await this.prisma.admin.findUnique({
            where: {
                userId: userId
            },
            include: {
                user: true
            }
        })
    }
}