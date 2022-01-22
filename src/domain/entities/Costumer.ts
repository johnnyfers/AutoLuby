import { UUidSetter } from "../services/UuidSetter";
import { User } from "./User";

export class Costumer{
    user: User
    id?: string
    
    constructor(user: User, id?: string) {
        this.user = user
        this.id = id
        if (!id) {
            this.id = this.id = UUidSetter.setId()
        }
    }
}