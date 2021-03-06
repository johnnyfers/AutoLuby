import { inject, injectable } from "tsyringe";
import { ReservationOrder } from "../../../domain/entities/ReservationOrder";
import { CostumerRepository } from "../../../domain/repositories/CostumerRepository";
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository";
import { ReservationOrderRepository } from "../../../domain/repositories/ReservationOrderRepository";
import { VehicleRepository } from "../../../domain/repositories/VehicleRepository";
import { DateFormatter } from "../../../domain/services/DateFormatter";
import { ReserveVehicleInput, ReserveVehicleOutput } from "../../dtos/vehicles/ReserveVehicleDTOs";

@injectable()
export class ReserveVehicle {
    private vehicleRepository: VehicleRepository
    private costumerRepository: CostumerRepository
    private employeeRepository: EmployeeRepository
    private reservationOrderRepository: ReservationOrderRepository

    constructor(
        @inject('VehicleRepository')
        vehicleRepository: VehicleRepository,
        @inject('CostumerRepository')
        costumerRepository: CostumerRepository,
        @inject('EmployeeRepository')
        employeeRepository: EmployeeRepository,
        @inject('ReservationOrderRepository')
        reservationOrderRepository: ReservationOrderRepository
    ) {
        this.vehicleRepository = vehicleRepository,
            this.costumerRepository = costumerRepository,
            this.employeeRepository = employeeRepository,
            this.reservationOrderRepository = reservationOrderRepository
    }

    async execute(payload: ReserveVehicleInput): Promise<ReserveVehicleOutput> {
        const dateString = DateFormatter.formatDate(payload.date)
        const vehicle = await this.vehicleRepository.findById(payload.vehicleId)
        const costumer = await this.costumerRepository.findById(payload.costumerId)
        const employee = await this.employeeRepository.findById(payload.employeeId)
        if (!vehicle) throw new Error('Vehicle not found')
        if (!costumer) throw new Error('costumer not found')
        if (!employee) throw new Error('employee not found')
        if (vehicle.status !== 'available') throw new Error('Vehicle not available')
        const reservationOrder = new ReservationOrder(employee, costumer, vehicle, dateString)
        reservationOrder.getReservationPrice(vehicle.price)
        await this.vehicleRepository.updateStatus(vehicle.id, 'reserved')
        await this.reservationOrderRepository.save(reservationOrder)

        return {
            message: 'vehicle reserved successfully',
            vehicle,
            costumer,
            employee,
            reservationPrice: reservationOrder.totalPrice,
            date: dateString
        }
    }
}