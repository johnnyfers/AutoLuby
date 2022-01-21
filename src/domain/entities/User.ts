import { UUidSetter } from "../services/UuidSetter"

export abstract class User {
    email: string
    name: string
    password: string
    isActive: boolean
    id?: string

    constructor(email: string, name: string, password: string, isActive: boolean, id?: string) {
        if (!id) {
            this.id = this.id = UUidSetter.setId()
        }
        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.isActive = isActive
    }
}