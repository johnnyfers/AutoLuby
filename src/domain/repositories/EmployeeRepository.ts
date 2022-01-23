import { UpdateEmployeeInput } from "../../app/dtos/employees/UpdateEmployeeDTOs";
import { Employee } from "../entities/Employee";

export interface EmployeeRepository {
    save(employee: Employee): Promise<void>
    findById(id: string): Promise<Employee> | undefined
    getAllActiveEmployees(): Promise<Employee[]> | undefined
    updateEmployee(updatePayload: UpdateEmployeeInput): Promise<Employee> | undefined
}