import { inject, injectable } from "tsyringe";
import { SellOrder } from "../../../domain/entities/SellOrder";
import { CostumerRepository } from "../../../domain/repositories/CostumerRepository";
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";
import { SellOrderRepository } from "../../../domain/repositories/SellOrderRepository";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { DateFormatter } from "../../../domain/services/DateFormatter";
import { SellVehicleInput, SellVehicleOutput } from "../../dtos/vehicles/SellVehicleDTOs";

@injectable()
export class SellVehicle {
    private vehicleRepository: VehicleRepository
    private costumerRepository: CostumerRepository
    private employeeRepository: EmployeeRepository
    private sellOrderRepository: SellOrderRepository

    constructor(
        @inject('VehicleRepository')
        vehicleRepository: VehicleRepository,
        @inject('CostumerRepository')
        costumerRepository: CostumerRepository,
        @inject('EmployeeRepository')
        employeeRepository: EmployeeRepository,
        @inject('ReservationOrderRepository')
        sellOrderRepository: SellOrderRepository
    ) {
        this.vehicleRepository = vehicleRepository,
            this.costumerRepository = costumerRepository,
            this.employeeRepository = employeeRepository,
            this.sellOrderRepository = sellOrderRepository
    }

    async execute(payload: SellVehicleInput): Promise<SellVehicleOutput | Error> {
        const dateString = DateFormatter.formatDate(payload.date)
        const vehicle = await this.vehicleRepository.findById(payload.vehicleId)
        const costumer = await this.costumerRepository.findById(payload.costumerId)
        const employee = await this.employeeRepository.findById(payload.employeeId)
        if (!vehicle) throw new Error('Vehicle not found')
        if (!costumer) throw new Error('costumer not found')
        if (!employee) throw new Error('employee not found')
        if (vehicle.status !== 'available') throw new Error('Vehicle not available')
        const sellOrder = new SellOrder(employee, costumer, vehicle, dateString, vehicle.price)
        await this.vehicleRepository.updateStatus(vehicle.id, 'sold')
        await this.sellOrderRepository.save(sellOrder)

        return {
            message: 'vehicle sold successfully',
            vehicle,
            costumer,
            employee,
            price: sellOrder.price,
            date: dateString
        }
    }
}