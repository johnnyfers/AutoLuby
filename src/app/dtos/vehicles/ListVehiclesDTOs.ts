import { Vehicle } from "../../../domain/entities/Vehicle";

export interface ListVehiclesInput {
    status?: string
}

export interface ListVehiclesOutput {
    vehicles: Vehicle[]
}