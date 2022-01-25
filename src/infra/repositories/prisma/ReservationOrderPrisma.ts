import { PrismaClient } from "@prisma/client";
import { ReservationOrder } from "../../../domain/entities/ReservationOrder";
import { ReservationOrderRepository } from "../../../domain/repositories/ReservationOrderRepository";

export class ReservationOrderRepositoryPrisma implements ReservationOrderRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }


    async save(reservationOrder: ReservationOrder): Promise<void> {
        this.prisma.reservationOrder.create({
            data: reservationOrder
        });
    }

}