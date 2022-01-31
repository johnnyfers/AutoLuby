import { Request, Response } from 'express'
import { container } from "tsyringe"
import { SellVehicle } from '../../appServices/vehicles/SellVehicle'

export class SellVehicleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const sellVehicle = container.resolve(SellVehicle)
        const vehicle = await sellVehicle.execute({...req.body, ...req.params})
        return res.json(vehicle)
    }
}