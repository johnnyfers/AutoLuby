import { inject, injectable } from "tsyringe";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { UpdateVehicleInput, UpdateVehicleOutput } from "../../dtos/vehicles/UpdateVehicleDTOs";

@injectable()
export class UpdateVehicle {
    private vehicleRepository: VehicleRepository

    constructor(
        @inject('VehicleRepository')
        vehicleRepository: VehicleRepository
    ) {
        this.vehicleRepository = vehicleRepository
    }

    async execute(payload: UpdateVehicleInput): Promise<UpdateVehicleOutput> {
        const vehicleExists = await this.vehicleRepository.findById(payload.vehicleId)
        if (!vehicleExists) throw new Error('Vehicle not found, unable to update')
        const vehicle = await this.vehicleRepository.updateVehicle(payload)

        return {
            message: 'Vehicle updated successfully',
            vehicle
        }
    }
}