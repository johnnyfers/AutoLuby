import { Request, Response } from 'express'
import { container } from "tsyringe"
import { ListEmployees } from '../../appServices/employees/ListEmployees'

export class ListEmployeesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listEmployees = container.resolve(ListEmployees)
        const employees = await listEmployees.execute()
        return res.json(employees)
    }
}