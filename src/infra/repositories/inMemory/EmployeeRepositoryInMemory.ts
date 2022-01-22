import { Employee } from "../../../domain/entities/Employee";
import { User } from "../../../domain/entities/User";
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository"

export class EmployeeRepositoryInMemory implements EmployeeRepository {
    employee: Employee[]

    constructor() {
        this.employee = [
            new Employee(50000, 'manager', new User('fake@email.com', 'fake', 'fake', true, 'dsadsadsa'), '111asd-sadas22-3434343'),
            new Employee(50000, 'manager', new User('fake@email.com', 'fake', 'fake', true), '111asd-sadas22-3333333'),
            new Employee(50000, 'manager', new User('fake@email.com', 'fake', 'fake', true), '111asd-sadas22-4444444'),
            new Employee(50000, 'manager', new User('fake@email.com', 'fake', 'fake', false, 'sadsadsadsa'), '111asd-sadas22-9999999'),
        ]
    }

    async save(employee: Employee): Promise<void> {
        this.employee.push(employee)
    }

    async findById(id: string): Promise<Employee> {
        return this.employee.find(employee => employee.id === id)
    }

    async getAllActiveEmployees(): Promise<Employee[]> {
        return this.employee.filter(employee => employee.user.isActive)
    }

    async updateEmployee(employeeId: string, updatePayload: { jobPosition?: string, annualSalary?: number }): Promise<Employee> {
        const index = this.employee.findIndex(employee => employee.id === employeeId)
        return this.employee[index] = {
            ...this.employee[index],
            ...updatePayload
        }
    }
}