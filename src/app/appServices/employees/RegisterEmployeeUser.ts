import { inject, injectable } from "tsyringe";
import { Employee } from "../../../domain/entities/Employee";
import { User } from "../../../domain/entities/User";
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { RegisterEmployeeUserInput, RegisterEmployeeUserOutPut } from "../../dtos/employees/RegisterEmployeeUserDTOs";
import { PasswordHasher } from "../../../domain/services/PasswordHasher";

@injectable()
export class RegisterEmployeeUser {
    private employeeRepository: EmployeeRepository
    private userRepository: UserRepository

    constructor(
        @inject('UserRepository')
        userRepository: UserRepository,
        @inject('EmployeeRepository')
        employeeRepository: EmployeeRepository
    ) {
        this.userRepository = userRepository
        this.employeeRepository = employeeRepository
    }

    async execute(payload: RegisterEmployeeUserInput): Promise<RegisterEmployeeUserOutPut> {
        const { email, annualSalary, jobPosition, name, password } = payload
        const passwordHashed = await PasswordHasher.hashPassword(password)
        const user = new User(email, name, passwordHashed, true)
        const employee = new Employee(annualSalary, jobPosition, user)
        const userAlreadyExists = await this.userRepository.findByemail(payload.email)
        if (userAlreadyExists) throw new Error('Email already registered')
        await this.userRepository.save(user)
        await this.employeeRepository.save(employee)

        return {
            id: employee.id,
            user: employee.user,
            jobPosition,
            name,
            email,
            annualSalary
        }
    }
}