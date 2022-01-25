import { PrismaClient } from "@prisma/client";
import { UpdateVehicleInput } from "../../../app/dtos/vehicles/UpdateVehicleDTOs";
import { Vehicle } from "../../../domain/entities/Vehicle";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";

export class VehicleRepositoryInMemory implements VehicleRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }

    async save(vehicle: Vehicle): Promise<void> {
        await this.prisma.vehicle.create({
            data: vehicle
        })
    }

    async getVehicles(filters: { status: string; }): Promise<Vehicle[]> {
        let vehicles = await this.prisma.vehicle.findMany({})
        if (filters.status) {
            vehicles = vehicles.filter(vehicle => vehicle.status === filters.status)
        }
        return vehicles
    }

    async findById(id: string): Promise<Vehicle> {
        return await this.prisma.vehicle.findUnique({
            where: {
                id: id
            }
        })

    }

    async updateStatus(vehicleId: string, status: string): Promise<void> {
        await this.prisma.vehicle.update({
            where: {
                id: vehicleId
            },
            data: {
                status
            }
        })
    }

    async updateVehicle(payload: UpdateVehicleInput): Promise<Vehicle> {
        const { vehicleId, brand, chassis, color, km, model, price, status, year } = payload
        return await this.prisma.vehicle.update({
            where: {
                id: vehicleId
            },
            data: {
                brand,
                chassis,
                color,
                km,
                model,
                price,
                status,
                year
            }
        })
    }
}