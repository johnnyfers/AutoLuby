import { Request, Response } from 'express'
import { container } from "tsyringe"
import { AuthUser } from '../../appServices/account/AuthUser'

export class AuthUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const authUser = container.resolve(AuthUser)
        const tokenResponse = await authUser.execute(req.body)
        return res.json(tokenResponse)
    }
}