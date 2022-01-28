import { Request, Response } from 'express'
import { container } from "tsyringe"
import { SoftDeleteEmployee } from '../../appServices/employees/SoftDeleteEmployee'

export class SoftDeleteEmployeeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const softDeleteEmployee = container.resolve(SoftDeleteEmployee)
        const employee = await softDeleteEmployee.execute(req.body)
        return res.json(employee)
    }
}