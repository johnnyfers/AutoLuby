import { Costumer } from "../../../domain/entities/Costumer";
import { User } from "../../../domain/entities/User";
import { CostumerRepository } from "../../../domain/repositories/CostumerRepository";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { RegisterCostumerUserInput, RegisterCostumerUserOutPut } from "../../dtos/costumers/RegisterCostumerUserDTOs";
import { PasswordHasher } from "../../../domain/services/PasswordHasher";

export class RegisterCostumerUser {
    CostumerRepository: CostumerRepository
    userRepository: UserRepository

    constructor(userRepository: UserRepository, CostumerRepository: CostumerRepository) {
        this.userRepository = userRepository
        this.CostumerRepository = CostumerRepository
    }

    async execute(payload: RegisterCostumerUserInput): Promise<RegisterCostumerUserOutPut> {
        const { email, name, password } = payload
        const passwordHashed = await PasswordHasher.hashPassword(password)
        const user = new User(email, name, passwordHashed, true)
        const costumer = new Costumer(user)
        const userAlreadyExists = await this.userRepository.findByemail(payload.email)
        if (userAlreadyExists) throw new Error('Email already registered')
        await this.userRepository.save(user)
        await this.CostumerRepository.save(costumer)

        return {
            id: costumer.id,
            user: costumer.user
        }
    }
}