import { Request, Response } from 'express'
import { container } from "tsyringe"
import { SoftDeleteVehicle } from '../../appServices/vehicles/SoftDeleteVehicle'

export class SoftDeleteVehicleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { vehicleId } = req.params
        const softDeleteVehicle = container.resolve(SoftDeleteVehicle)
        const vehicle = await softDeleteVehicle.execute({ vehicleId })
        return res.json(vehicle)
    }
}