import { Costumer } from "../../domain/entities/Costumer"
import { Employee } from "../../domain/entities/Employee"
import { Vehicle } from "../../domain/entities/Vehicle"

interface SellVehicleInput {
    employeeId: string
    costumerId: string
    vehicleId: string
    date: Date
}

interface SellVehicleOutput {
    message: string
    vehicle: Vehicle
    costumer: Costumer
    employee: Employee
    price: number
    date: string
}

export { SellVehicleInput, SellVehicleOutput }