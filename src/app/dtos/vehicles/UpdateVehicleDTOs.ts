import { Vehicle } from "../../../domain/entities/Vehicle";

export interface UpdateVehicleInput {
    vehicleId: string
    brand?: string
    model?: string
    year?: number
    km?: number
    color?: string
    chassis?: string
    price?: number
    status?: string
}

export interface UpdateVehicleOutput {
    message: string;
    vehicle: Vehicle
} 