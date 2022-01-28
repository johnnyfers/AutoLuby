import { Request, Response } from 'express'
import { container } from "tsyringe"
import { RegisterCostumerUser } from '../../appServices/costumers/RegisterCostumerUser'

export class RegisterCostumerUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const registerCostumerUser = container.resolve(RegisterCostumerUser)
        const Costumer = await registerCostumerUser.execute(req.body)
        return res.json(Costumer)
    }
}