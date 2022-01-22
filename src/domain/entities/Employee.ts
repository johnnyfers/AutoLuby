import { UUidSetter } from "../services/UuidSetter";
import { User } from "./User";

export class Employee {
    annualSalary: number
    jobPosition: string
    user: User
    id?: string

    constructor(annualSalary: number, jobPosition: string, user: User, id?: string) {
        this.annualSalary = annualSalary
        this.jobPosition = jobPosition
        this.user = user
        this.id = id
        if (!id) {
            this.id = this.id = UUidSetter.setId()
        }
    }
}