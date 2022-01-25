import { sign } from "jsonwebtoken";
import { TokenGenerator } from "./TokenGenerator";

export class JsonWebToken implements TokenGenerator {
    private secret: string
    private tokenExpiration: string
    private refreshTokenExpiration: string

    constructor() {
        this.secret = process.env.JWT_SECRET,
            this.tokenExpiration = '10h'
        this.refreshTokenExpiration = '30d'
    }

    getToken(subject: string): string {
        return sign({}, this.secret, {
            subject,
            expiresIn: this.tokenExpiration
        })
    }
    
    getRefreshToken(email: string, subject: string): string {
        return sign({ email }, this.secret, {
            subject,
            expiresIn: this.refreshTokenExpiration
        })
    }

}