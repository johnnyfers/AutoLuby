import { Request, Response } from 'express'
import { container } from "tsyringe"
import { ListVehicles } from '../../appServices/vehicles/ListVehicles'

export class ListVehiclesController {
    async handle(req: Request, res: Response): Promise<Response> {
        const listVehicles = container.resolve(ListVehicles)
        const vehicle = await listVehicles.execute(req.query)
        return res.json(vehicle)
    }
}