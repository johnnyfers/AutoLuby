import { User } from "../../domain/entities/User";

export interface RegisterEmployeeUserInput {
    email: string
    name: string
    password: string
    jobPosition: string
    annualSalary: number
}

export interface RegisterEmployeeUserOutPut {
    id: string
    user: User
    email: string
    name: string
    jobPosition: string
    annualSalary: number
}