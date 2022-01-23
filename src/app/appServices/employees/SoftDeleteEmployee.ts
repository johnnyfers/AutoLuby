import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository"
import { UserRepository } from "../../../domain/repositories/UserRepository"
import { SoftDeleteEmployeeInput, SoftDeleteEmployeeOutput } from "../../dtos/employees/SoftDeleteEmployeeDTOs"

export class SoftDeleteEmployee {
    employeeRepository: EmployeeRepository
    userRepository: UserRepository

    constructor(userRepository: UserRepository, employeeRepository: EmployeeRepository) {
        this.userRepository = userRepository
        this.employeeRepository = employeeRepository
    }
    
    async execute(payload: SoftDeleteEmployeeInput): Promise<SoftDeleteEmployeeOutput> {
        const employee = await this.employeeRepository.findById(payload.employeeId)
        if (!employee) throw new Error('employee not found')
        if(!employee.user.isActive) throw new Error('Employee already deleted')
        await this.userRepository.softDelete(employee.user.id)
        return {
            message: 'Employee deleted successfully'
        }
    }
}