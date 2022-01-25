import { User } from "../../../domain/entities/User";
import { UserRepository } from "../../../domain/repositories/UserRepository";

export class UserRepositoryInMemory implements UserRepository {
    user: User[]

    constructor() {
        this.user = [
            new User('fake@email.com', 'fake', 'fake', false, 'sadsadsadsa'),
            new User('fake@email.com', 'fake', 'fake', true, 'dsadsadsa'),
            new User('fake77@email.com', 'fake', '$2a$08$WeYhsmq1RKFu8YVfKyEVOe78Dn9WzZNvnO1vmhuurDfcu4uhS0c2a', false, 'sadsadsadsa'),
        ];
    }

    async save(user: User): Promise<void> {
        this.user.push(user)
    }

    async softDelete(id: string): Promise<void> {
        const index = this.user.findIndex(user => user.id === id)
        this.user[index].isActive = false
    }

    async findByemail(email: string): Promise<User> {
        return this.user.find(user => user.email === email)
    }
}