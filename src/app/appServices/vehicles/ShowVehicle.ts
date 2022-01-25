import { inject, injectable } from "tsyringe";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { ShowVehicleInput, ShowVehicleOutput } from "../../dtos/vehicles/ShowVehicleDTOs";

@injectable()
export class ShowVehicle {
    private vehicleRepository: VehicleRepository

    constructor(
        @inject('VehicleRepository')
        vehicleRepository: VehicleRepository
    ) {
        this.vehicleRepository = vehicleRepository
    }

    async execute(payload: ShowVehicleInput): Promise<ShowVehicleOutput> {
        const vehicle = await this.vehicleRepository.findById(payload.vehicleId)
        if (!vehicle) throw new Error('Vehicle not found')

        return vehicle
    }
}