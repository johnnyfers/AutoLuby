import { inject, injectable } from "tsyringe"
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";
import { UpdateEmployeeInput, UpdateEmployeeOutput } from "../../dtos/employees/UpdateEmployeeDTOs";

@injectable()
export class UpdateEmployee {
    private employeeRepository: EmployeeRepository

    constructor(
        @inject('EmployeeRepository')
        employeeRepository: EmployeeRepository
    ) {
        this.employeeRepository = employeeRepository
    }

    async execute(payload: UpdateEmployeeInput): Promise<UpdateEmployeeOutput> {
        const employee = await this.employeeRepository.findById(payload.employeeId)
        if (!employee) throw new Error('employee not found')
        const employeeUpdated = await this.employeeRepository.updateEmployee(payload)
        return {
            message: 'Employee updated successfully',
            employee: employeeUpdated
        }
    }
}