import { Request, Response } from 'express'
import { container } from "tsyringe"
import { ObtainVehicle } from '../../appServices/vehicles/ObtainVehicle'

export class ObtainVehicleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const obtainVehicle = container.resolve(ObtainVehicle)
        const vehicle = await obtainVehicle.execute(req.body)
        return res.json(vehicle)
    }
}