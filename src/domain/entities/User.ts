import { UUidSetter } from "../services/UuidSetter"

export  class User {
    email: string
    name: string
    password: string
    isActive: boolean
    id?: string

    constructor(email: string, name: string, password: string, isActive: boolean, id?: string) {
        this.id = id
        this.email = email
        this.name = name
        this.password = password
        this.isActive = isActive
        if (!id) {
            this.id = UUidSetter.setId()
        }
    }
}