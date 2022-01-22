import { Costumer } from "../entities/Costumer";

export interface CostumerRepository {
    findById(id: string): Promise<Costumer> | undefined
}