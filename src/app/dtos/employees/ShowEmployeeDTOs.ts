import { Employee } from "../../../domain/entities/Employee";

export interface ShowEmployeeInput {
    employeeId: string
}

export interface ShowEmployeeOutput {
    employee: Employee
}