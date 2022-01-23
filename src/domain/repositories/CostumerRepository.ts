import { Costumer } from "../entities/Costumer";

export interface CostumerRepository {
    save(costumer: Costumer): Promise<void>
    findById(id: string): Promise<Costumer> | undefined
}