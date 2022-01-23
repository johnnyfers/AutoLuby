import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";
import { ShowEmployeeInput, ShowEmployeeOutput } from "../../dtos/employees/ShowEmployeeDTOs";


export class ShowEmployee {
    employeeRepository: EmployeeRepository

    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async execute(payload: ShowEmployeeInput): Promise<ShowEmployeeOutput> {
        const employee = await this.employeeRepository.findById(payload.employeeId)
        if(!employee) throw new Error('employee not found')
        return { employee }
    }
}