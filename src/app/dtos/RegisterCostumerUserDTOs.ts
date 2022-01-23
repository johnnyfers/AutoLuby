import { User } from "../../domain/entities/User";

export interface RegisterCostumerUserInput {
    email: string
    name: string
    password: string
}

export interface RegisterCostumerUserOutPut {
    id: string
    user: User
}