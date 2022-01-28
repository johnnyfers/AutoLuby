import { Request, Response } from 'express'
import { container } from "tsyringe"
import { ShowEmployee } from '../../appServices/employees/ShowEmployee'

export class ShowEmployeeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const showEmployee = container.resolve(ShowEmployee)
        const employee = await showEmployee.execute(req.body)
        return res.json(employee)
    }
}