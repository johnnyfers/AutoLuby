import { Admin } from "../../../domain/entities/Admin";
import { AdminRepository } from "../../../domain/repositories/AdminRepository";

export class AdminRepositoryInMemory implements AdminRepository {
    admin: Admin[]

    constructor() {
        this.admin = []
     }

    async save(admin: Admin): Promise<void> {
        this.admin.push(admin)
    }
}