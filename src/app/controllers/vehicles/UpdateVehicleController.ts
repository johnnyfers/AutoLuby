import { Request, Response } from 'express'
import { container } from "tsyringe"
import { UpdateVehicle } from '../../appServices/vehicles/UpdateVehicle'

export class UpdateVehicleController {
    async handle(req: Request, res: Response): Promise<Response> {
        const { vehicleId } = req.params
        const updateVehicle = container.resolve(UpdateVehicle)
        const vehicle = await updateVehicle.execute({ vehicleId })
        return res.json(vehicle)
    }
}