import { compare } from "bcrypt"
import { inject, injectable } from "tsyringe";
import { UserLogin } from "../../../domain/entities/UserLogin";
import { UserRepository } from "../../../domain/repositories/UserRepository";
import { JsonWebToken } from "../../../domain/services/JsonWebToken";
import { AuthUserInput, AuthUserOutput } from "../../dtos/account/AuthUserDTOs";

@injectable()
export class AuthUser {
    private userRepository: UserRepository

    constructor(
        @inject('UserRepository')
        userRepository: UserRepository) {
        this.userRepository = userRepository
    }

    async execute(payload: AuthUserInput): Promise<AuthUserOutput> {
        const jwt = new JsonWebToken()
        const userLogin = new UserLogin(payload.email, payload.password, jwt)
        const user = await this.userRepository.findByemail(userLogin.email)
        if (!user) throw new Error('Email or password incorrect')
        const passwordMatch = await compare(userLogin.password, user.password)
        if (!passwordMatch) throw new Error('Email or password incorrect')
        const token = userLogin.getToken(user.id)
        const refreshToken = userLogin.getRefreshToken(user.email, user.id)
        return {
            token,
            refreshToken,
            user: {
                email: user.email,
                name: user.name
            }
        }
    }
}