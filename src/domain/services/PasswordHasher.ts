import bcrypt from 'bcrypt'

export class PasswordHasher {
    static async hashPassword(password: string): Promise<string> {
        return bcrypt.hash(password,15)
    }
}