import { Request, Response } from 'express'
import { container } from "tsyringe"
import { RegisterEmployeeUser } from '../../appServices/employees/RegisterEmployeeUser'

export class RegisterEmployeeUserController {
    async handle(req: Request, res: Response): Promise<Response> {
        const registerEmployeeUser = container.resolve(RegisterEmployeeUser)
        const employee = await registerEmployeeUser.execute(req.body)
        return res.json(employee)
    }
}