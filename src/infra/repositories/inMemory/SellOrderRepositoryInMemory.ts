import { SellOrder } from "../../../domain/entities/SellOrder";
import { SellOrderRepository } from "../../../domain/repositories/SellOrderRepository";

export class SellOrderRepositoryInMemory implements SellOrderRepository {
    sellOrder: SellOrder[]
    
    constructor() { 
        this.sellOrder = [];
    }

    async save(sellOrder: SellOrder): Promise<void> {
        this.sellOrder.push(sellOrder);
    }

}