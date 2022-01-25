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

    getToken(userId: string): string {
        return this.tokenGenerator.getToken(userId)
    }

    getRefreshToken(email: string, userId: string): string {
        return this.tokenGenerator.getRefreshToken(email, userId)
    }
}