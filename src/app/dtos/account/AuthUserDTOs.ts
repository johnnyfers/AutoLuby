export interface AuthUserInput {
    email: string
    password: string
}

export interface AuthUserOutput {
    token: string
    refreshToken: string
    user: {
        name: string
        email: string
    }
}