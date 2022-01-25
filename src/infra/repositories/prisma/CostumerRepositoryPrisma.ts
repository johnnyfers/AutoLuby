import { PrismaClient } from "@prisma/client";
import { Costumer } from "../../../domain/entities/Costumer";
import { CostumerRepository } from "../../../domain/repositories/CostumerRepository";

export class CostumerRepositoryPrisma implements CostumerRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async save(costumer: Costumer): Promise<void> {
        await this.prisma.costumer.create({
            data: costumer
        })
    }

    async findById(id: string): Promise<Costumer> {
        return await this.prisma.costumer.findUnique({
            where: {
                id: id,
            },
            include: {
                user: true
            }
        })
    }

}