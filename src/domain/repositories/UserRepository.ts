import { User } from "../entities/User";

export interface UserRepository {
    softDelete(id: string): Promise<void>
    save(user: User): Promise<void>
}