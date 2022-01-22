import { Employee } from "../entities/Employee";

export interface EmployeeRepository {
    save(employee: Employee): Promise<void>
    findById(id: string): Promise<Employee> | undefined
    getAllActiveEmployees(): Promise<Employee[]> | undefined
    updateEmployee(employeeId: string, updatePayload: { jobPosition?: string, annualSalary?: number }): Promise<Employee> | undefined
}