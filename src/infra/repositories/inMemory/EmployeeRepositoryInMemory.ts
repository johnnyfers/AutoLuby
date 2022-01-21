import { Employee } from "../../../domain/entities/Employee";
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";

export class EmployeeRepositoryInMemory implements EmployeeRepository {
    employee: Employee[]

    constructor() {
        this.employee = [new Employee('fake1@email.com', 'fake', 'fake', true, 50000, 'manager', '111asd-sadas22-3434343')]
    }

    async findById(id: string): Promise<Employee> {
        return this.employee.find(employee => employee.id === id)
    }

}