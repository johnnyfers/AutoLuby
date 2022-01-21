import { Employee } from "../entities/Employee";

export interface EmployeeRepository {
    findById(id: string): Promise<Employee>
}