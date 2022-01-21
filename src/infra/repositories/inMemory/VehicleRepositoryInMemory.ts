import { Vehicle } from "../../../domain/entities/Vehicle";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";

export class VehicleRepositoryInMemory implements VehicleRepository {
    vehicles: Vehicle[]

    constructor() {
        this.vehicles = [
            new Vehicle('BMW', 'M1', 2018, 10300, 'blue', '123hsadas23', 150000, 'available', '444444-2323-sdf4543'),
            new Vehicle('BMW', 'M1', 2018, 10300, 'blue', '45454dddd', 150000, 'sold', '324324-sadsdf454-dfsd44')
        ]
    }

    async findById(id: string): Promise<Vehicle> {
        return this.vehicles.find(vehicle => vehicle.id === id)
    }

    async updateStatus(vehicleId: string, status: string): Promise<void> {
        const vehicleIndex = this.vehicles.findIndex(vehicle => vehicle.id === vehicleId)
        this.vehicles[vehicleIndex].status = status
    }

}