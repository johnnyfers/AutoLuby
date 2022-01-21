import { Vehicle } from "../entities/Vehicle";

export interface VehicleRepository {
    findById(id: string): Promise<Vehicle> | undefined
    updateStatus(vehicleId: string, status: string): Promise<void>
}