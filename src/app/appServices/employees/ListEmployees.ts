import { inject, injectable } from "tsyringe";
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";
import { listEmployeesOutPut } from "../../dtos/employees/ListEmployeesDTOs";

@injectable()
export class ListEmployees {
    private employeeRepository: EmployeeRepository

    constructor(
        @inject('EmployeeRepository')
        employeeRepository: EmployeeRepository
    ) {
        this.employeeRepository = employeeRepository
    }

    async execute(): Promise<listEmployeesOutPut> {
        const employees = await this.employeeRepository.getAllActiveEmployees()
        return { employees }
    }
}