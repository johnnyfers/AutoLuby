import { Request, Response } from 'express'
import { container } from "tsyringe"
import { RegisterAdminUser } from '../../appServices/admins/RegisterAdminUser'

export class RegisterAdminUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const registerAdminUser = container.resolve(RegisterAdminUser)
        const admin = await registerAdminUser.execute(req.body)
        return res.json(admin)
    }
}