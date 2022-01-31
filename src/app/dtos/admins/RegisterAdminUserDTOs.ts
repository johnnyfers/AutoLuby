import { User } from "../../../domain/entities/User";

export interface RegisterAdminUserInput {
    email: string
    name: string
    password: string
}

export interface RegisterAdminUserOutPut {
    id: string
    user: {
        email: string,
        name: string
    }
}