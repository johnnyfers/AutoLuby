import { Admin } from "../../../domain/entities/Admin";
import { User } from "../../../domain/entities/User";
import { AdminRepository } from "../../../domain/repositories/AdminRepository";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { RegisterAdminUserInput, RegisterAdminUserOutPut } from "../../dtos/admins/RegisterAdminUserDTOs";
import { PasswordHasher } from "../../../domain/services/PasswordHasher";

export class RegisterAdminUser {
    adminRepository: AdminRepository
    userRepository: UserRepository

    constructor(userRepository: UserRepository, adminRepository: AdminRepository) {
        this.userRepository = userRepository
        this.adminRepository = adminRepository
    }

    async execute(payload: RegisterAdminUserInput): Promise<RegisterAdminUserOutPut> {
        const { email, name, password } = payload
        const passwordHashed = await PasswordHasher.hashPassword(password)
        const user = new User(email, name, passwordHashed, true)
        const admin = new Admin(user)
        const userAlreadyExists = await this.userRepository.findByemail(payload.email)
        if (userAlreadyExists) throw new Error('Email already registered')
        await this.userRepository.save(user)
        await this.adminRepository.save(admin)

        return {
            id: admin.id,
            user: admin.user
        }
    }
}