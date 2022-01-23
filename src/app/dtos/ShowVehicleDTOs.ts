import { Vehicle } from "../../domain/entities/Vehicle";

export interface ShowVehicleInput {
    vehicleId: string;
}

export interface ShowVehicleOutput  {
    brand: string
    model: string
    year: number
    km: number
    color: string
    chassis: string
    price: number
    status: string
    id?: string
}