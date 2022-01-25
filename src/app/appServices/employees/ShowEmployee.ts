import { inject, injectable } from "tsyringe";
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";
import { ShowEmployeeInput, ShowEmployeeOutput } from "../../dtos/employees/ShowEmployeeDTOs";

@injectable()
export class ShowEmployee {
    private employeeRepository: EmployeeRepository

    constructor(
        @inject('EmployeeRepository')
        employeeRepository: EmployeeRepository) {
        this.employeeRepository = employeeRepository
    }

    async execute(payload: ShowEmployeeInput): Promise<ShowEmployeeOutput> {
        const employee = await this.employeeRepository.findById(payload.employeeId)
        if(!employee) throw new Error('employee not found')
        return { employee }
    }
}