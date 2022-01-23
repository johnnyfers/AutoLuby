import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { SoftDeleteVehicleInput, SoftDeleteVehicleOutput } from "../../dtos/vehicles/SoftDeleteVehicleDTOs";

export class SoftDeleteVehicle {
    vehicleRepository: VehicleRepository

    constructor(vehicleRepository: VehicleRepository) {
        this.vehicleRepository = vehicleRepository
    }

    async execute(payload: SoftDeleteVehicleInput): Promise<SoftDeleteVehicleOutput> {
        const vehicleExists = await this.vehicleRepository.findById(payload.vehicleId)
        if (!vehicleExists) throw new Error('Vehicle not found, unable to soft delete')
        if (vehicleExists.status === 'unavailable') throw new Error('Vehicle already unavailable')
        await this.vehicleRepository.updateStatus(payload.vehicleId, 'unavailable')

        return {
            message: 'Vehicle deleted successfully'
        }
    }
}