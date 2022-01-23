import { Vehicle } from "../../../domain/entities/Vehicle";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { ShowVehicleInput, ShowVehicleOutput } from "../../dtos/vehicles/ShowVehicleDTOs";

export class ShowVehicle {
    vehicleRepository: VehicleRepository

    constructor(vehicleRepository: VehicleRepository) {
        this.vehicleRepository = vehicleRepository
    }

    async execute(payload: ShowVehicleInput): Promise<ShowVehicleOutput> {
        const vehicle = await this.vehicleRepository.findById(payload.vehicleId)
        if (!vehicle) throw new Error('Vehicle not found')

        return vehicle
    }
}