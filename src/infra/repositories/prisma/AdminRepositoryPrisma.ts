import { PrismaClient } from "@prisma/client";
import { Admin } from "../../../domain/entities/Admin";
import { AdminRepository } from "../../../domain/repositories/AdminRepository";

export class AdminRepositoryPrisma implements AdminRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async save(admin: Admin): Promise<void> {
        this.prisma.admin.create({
            data: admin
        })
    }
}