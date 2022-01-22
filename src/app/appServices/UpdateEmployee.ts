import { EmployeeRepository } from "../../domain/repositories/EmployeeRepository";
//mport { UpdateEmployeeInput, UpdateEmployeeOutput } from "../dtos/UpdateEmployeeDTOs";

export class UpdateEmployee {
    employeeRepository: EmployeeRepository

    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async execute(payload: any): Promise<any> {
        const employee = await this.employeeRepository.findById(payload.employeeId)
        if(!employee) throw new Error('employee not found')
        const employeeUpdated = await this.employeeRepository.updateEmployee(payload.employeeId, payload)
        return { employee: employeeUpdated }
    }
}