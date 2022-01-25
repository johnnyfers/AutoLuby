import { TokenGenerator } from "../services/TokenGenerator"

export class UserLogin {
    email: string
    password: string
    tokenGenerator: TokenGenerator

    constructor(email: string, password: string, tokenGenerator: TokenGenerator) {
        this.email = email
        this.password = password
        this.tokenGenerator = tokenGenerator
    }

    getToken(subject: string): string {
        return this.tokenGenerator.getToken(subject)
    }

    getRefreshToken(email: string, subject: string): string {
        return this.tokenGenerator.getRefreshToken(email, subject)
    }
}