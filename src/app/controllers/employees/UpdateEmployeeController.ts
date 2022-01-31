import { Request, Response } from 'express'
import { container } from "tsyringe"
import { UpdateEmployee } from '../../appServices/employees/UpdateEmployee'

export class UpdateEmployeeController {
    async handle(req: Request, res: Response): Promise<Response> {
        const updateEmployee = container.resolve(UpdateEmployee)
        const employee = await updateEmployee.execute({...req.body, ...req.params})
        return res.json(employee)
    }
}