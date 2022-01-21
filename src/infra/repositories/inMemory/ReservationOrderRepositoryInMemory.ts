import { ReservationOrder } from "../../../domain/entities/ReservationOrder";
import { ReservationOrderRepository } from "../../../domain/repositories/ReservationOrderRepository";

export class ReservationOrderRepositoryInMemory implements ReservationOrderRepository {
    ReservationOrder: ReservationOrder[]
    
    constructor() { 
        this.ReservationOrder = []
    }

    async save(ReservationOrder: ReservationOrder): Promise<void> {
        this.ReservationOrder.push(ReservationOrder);
    }

}