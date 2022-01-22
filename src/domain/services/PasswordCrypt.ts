import bcrypt from 'bcrypt'

export class PasswordCrypt {
    static async saltPassword(password: string): Promise<string> {
        return bcrypt.hash(password, 15)
    }
}