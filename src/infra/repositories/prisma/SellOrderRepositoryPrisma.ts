import { PrismaClient } from "@prisma/client";
import { SellOrder } from "../../../domain/entities/SellOrder";
import { SellOrderRepository } from "../../../domain/repositories/SellOrderRepository";

export class SellOrderRepositoryPrisma implements SellOrderRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }


    async save(sellOrder: SellOrder): Promise<void> {
        await this.prisma.sellOrder.create({
            data: {
                dateString: sellOrder.dateString,
                price: sellOrder.price,
                costumerId: sellOrder.costumer.id,
                employeeId: sellOrder.employee.id,
                vehicleId: sellOrder.vehicle.id
            }
        });
    }

}