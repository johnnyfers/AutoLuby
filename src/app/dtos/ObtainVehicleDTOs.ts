import { Vehicle } from "../../domain/entities/Vehicle";

export interface ObtainVehicleInput {
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

export interface ObtainVehicleOutput  {
    message: string
    vehicle: Vehicle
}