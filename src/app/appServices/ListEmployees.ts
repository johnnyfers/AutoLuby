import { EmployeeRepository } from "../../domain/repositories/EmployeeRepository";
import { listEmployeesOutPut } from "../dtos/ListEmployeesDTOs";

export class ListEmployees {
    employeeRepository: EmployeeRepository

    constructor(employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async execute(): Promise<listEmployeesOutPut> {
        const employees = await this.employeeRepository.getAllActiveEmployees()
        return { employees }
    }
}