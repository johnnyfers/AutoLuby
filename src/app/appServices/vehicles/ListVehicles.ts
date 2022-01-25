import { inject, injectable } from "tsyringe";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { ListVehiclesInput, ListVehiclesOutput } from "../../dtos/vehicles/ListVehiclesDTOs";

@injectable()
export class ListVehicles {
    private vehicleRepository: VehicleRepository

    constructor(
        @inject('VehicleRepository')
        vehicleRepository: VehicleRepository
    ) {
        this.vehicleRepository = vehicleRepository
    }

    async execute(payload: ListVehiclesInput): Promise<ListVehiclesOutput> {
        const vehicles = await this.vehicleRepository.getVehicles(payload)

        return {
            vehicles
        }
    }
}