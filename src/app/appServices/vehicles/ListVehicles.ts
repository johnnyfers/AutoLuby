import { Vehicle } from "../../../domain/entities/Vehicle";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { ListVehiclesInput, ListVehiclesOutput } from "../../dtos/vehicles/ListVehiclesDTOs";

export class ListVehicles {
    vehicleRepository: VehicleRepository

    constructor(vehicleRepository: VehicleRepository) {
        this.vehicleRepository = vehicleRepository
    }

    async execute(payload: ListVehiclesInput): Promise<ListVehiclesOutput> {
        const vehicles = await this.vehicleRepository.getVehicles(payload)

        return {
            vehicles
        }
    }
}