import { Admin } from "../entities/Admin";

export interface AdminRepository {
    save(Admin: Admin): Promise<void>
    findByUserId(userId: string): Promise<Admin>
}