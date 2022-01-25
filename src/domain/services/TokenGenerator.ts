export interface TokenGenerator {
    getToken(subject: string): string
    getRefreshToken(email: string, subject: string): string
}