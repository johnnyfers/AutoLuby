import { User } from "../entities/User";

export interface UserRepository {
    findByemail(email: string): Promise<User> | undefined
    softDelete(id: string): Promise<void>
    save(user: User): Promise<void>
}