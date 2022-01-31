import { Request, Response } from 'express'
import { container } from "tsyringe"
import { ReserveVehicle } from '../../appServices/vehicles/ReserveVehicle'

export class ReserveVehicleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const reserveVehicle = container.resolve(ReserveVehicle)
        const vehicle = await reserveVehicle.execute({...req.body, ...req.params})
        return res.json(vehicle)
    }
}