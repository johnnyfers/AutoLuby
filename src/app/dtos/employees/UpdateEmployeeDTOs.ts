import { Employee } from "../../../domain/entities/Employee"

export interface UpdateEmployeeInput {
    employeeId: string
    annualSalary?: number
    jobPosition?: string
}

export interface UpdateEmployeeOutput {
    message: string
    employee: Employee
}
