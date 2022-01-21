import { User } from "./User";

export class Costumer extends User {
    constructor(email: string, name: string, password: string, isActive: boolean, id?: string) {
        super(email, name, password, isActive, id)
    }
}