import { Vehicle } from "../../domain/entities/Vehicle";
import { VehicleRepository } from "../../domain/repositories/VehicleRepository";
import { ObtainVehicleInput, ObtainVehicleOutput } from "../dtos/ObtainVehicleDTOs";

export class ObtainVehicle {
    vehicleRepository: VehicleRepository

    constructor(vehicleRepository: VehicleRepository) {
        this.vehicleRepository = vehicleRepository
    }

    async execute(payload: ObtainVehicleInput): Promise<ObtainVehicleOutput | Error> {
        const vehicle = new Vehicle(
            payload.brand, payload.model, payload.year, payload.km, payload.color, payload.chassis, payload.price, payload.status
        )
        await this.vehicleRepository.save(vehicle)

        return {
            message: 'vehicle obtained successfully',
            vehicle
        }
    }
}