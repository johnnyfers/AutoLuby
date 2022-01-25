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

    async findByUserId(userId: string): Promise<Admin> {
        return this.admin.find(admin => admin.user.id === userId)
    }
}