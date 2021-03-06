import { UpdateVehicleInput } from "../../app/dtos/vehicles/UpdateVehicleDTOs";
import { Vehicle } from "../entities/Vehicle";

export interface VehicleRepository {
    getVehicles(filters: { status?: string }): Promise<Vehicle[]>
    save(vehicle: Vehicle): Promise<void>
    findById(id: string): Promise<Vehicle> | undefined
    updateStatus(vehicleId: string, status: string): Promise<void>
    updateVehicle(payload: UpdateVehicleInput): Promise<Vehicle>
}