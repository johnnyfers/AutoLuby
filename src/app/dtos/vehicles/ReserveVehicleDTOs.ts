import { Costumer } from "../../../domain/entities/Costumer"
import { Employee } from "../../../domain/entities/Employee"
import { Vehicle } from "../../../domain/entities/Vehicle"

interface ReserveVehicleInput {
    employeeId: string
    costumerId: string
    vehicleId: string
    date: Date
}

interface ReserveVehicleOutput {
    message: string
    vehicle: Vehicle
    costumer: Costumer
    employee: Employee
    reservationPrice: number
    date: string
}

export { ReserveVehicleInput, ReserveVehicleOutput }