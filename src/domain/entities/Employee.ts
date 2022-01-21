import { User } from "./User";

export class Employee extends User {
    annualSalary: number
    jobPosition: string

    constructor(email: string, name: string, password: string, isActive: boolean, annualSalary: number, jobPosition: string, id?: string) {
        super(email, name, password, isActive, id)
        this.annualSalary = annualSalary
        this.jobPosition = jobPosition
    }
}