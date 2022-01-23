import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";
import { UpdateEmployeeInput, UpdateEmployeeOutput } from "../../dtos/employees/UpdateEmployeeDTOs";

export class UpdateEmployee {
    employeeRepository: EmployeeRepository

    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async execute(payload: UpdateEmployeeInput): Promise<UpdateEmployeeOutput> {
        const employee = await this.employeeRepository.findById(payload.employeeId)
        if(!employee) throw new Error('employee not found')
        const employeeUpdated = await this.employeeRepository.updateEmployee(payload)
        return {
            message: 'Employee updated successfully',
            employee: employeeUpdated 
        }
    }
}