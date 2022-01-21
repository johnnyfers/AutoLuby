import { v4 as uuidv4 } from 'uuid';

export class UUidSetter {
    static setId(): string{
        return uuidv4()
    }
}