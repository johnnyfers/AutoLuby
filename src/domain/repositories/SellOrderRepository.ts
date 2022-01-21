import { SellOrder } from "../entities/SellOrder";

export interface SellOrderRepository {
    save(sellOrder: SellOrder): Promise<void>
}