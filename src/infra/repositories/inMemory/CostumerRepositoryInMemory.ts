import { Costumer } from "../../../domain/entities/Costumer";
import { User } from "../../../domain/entities/User";
import { CostumerRepository } from "../../../domain/repositories/CostumerRepository";

export class CostumerRepositoryInMemory implements CostumerRepository {
    costumer: Costumer[]

    constructor() {
        this.costumer = [new Costumer(new User('fake@email.com', 'fake', 'fake', true), '111asd-sadas22-223232')]
    }
    
    async save(costumer: Costumer): Promise<void> {
        this.costumer.push(costumer)
    }

    async findById(id: string): Promise<Costumer> {
        return this.costumer.find(costumer => costumer.id === id)
    }

}