import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";

export class UserRepositoryInMemory implements UserRepository{
    user: User[]

    constructor() {
        this.user = [];
    }
    
    async save(user: User): Promise<void> {
        this.user.push(user)
    }

    async softDelete(id: string): Promise<void> {
        const index = this.user.findIndex(user => user.id === id)
        this.user[index].isActive = false
    }
}