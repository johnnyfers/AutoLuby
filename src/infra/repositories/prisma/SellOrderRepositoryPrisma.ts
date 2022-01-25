import { PrismaClient } from "@prisma/client";
import { SellOrder } from "../../../domain/entities/SellOrder";
import { SellOrderRepository } from "../../../domain/repositories/SellOrderRepository";

export class SellOrderRepositoryPrisma implements SellOrderRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }


    async save(sellOrder: SellOrder): Promise<void> {
        this.prisma.sellOrder.create({
            data: sellOrder
        });
    }

}