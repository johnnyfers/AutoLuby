import { inject, injectable } from "tsyringe";
import { Vehicle } from "../../../domain/entities/Vehicle";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { ObtainVehicleInput, ObtainVehicleOutput } from "../../dtos/vehicles/ObtainVehicleDTOs";

@injectable()
export class ObtainVehicle {
    private vehicleRepository: VehicleRepository

    constructor(
        @inject('VehicleRepository')
        vehicleRepository: VehicleRepository) {
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