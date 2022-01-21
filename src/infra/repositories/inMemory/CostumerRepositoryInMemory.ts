import { Costumer } from "../../../domain/entities/Costumer";
import { CostumerRepository } from "../../../domain/repositories/CostumerRepository";

export class CostumerRepositoryInMemory implements CostumerRepository {
    costumer: Costumer[]

    constructor() {
        this.costumer = [new Costumer('fake1@email.com', 'fake', 'fake', true, '111asd-sadas22-223232')]
    }

    async findById(id: string): Promise<Costumer> {
        return this.costumer.find(costumer => costumer.id === id)
    }

}