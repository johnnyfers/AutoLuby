import { UUidSetter } from "../services/UuidSetter"
import { Costumer } from "./Costumer"
import { Employee } from "./Employee"
import { Vehicle } from "./Vehicle"

export class SellOrder {
    employee: Employee
    costumer: Costumer
    vehicle: Vehicle
    dateString: string
    price: number
    id?: string

    constructor(employee: Employee, costumer: Costumer, vehicle: Vehicle, dateString: string, price: number, id?: string) {
        this.id = id
        this.employee = employee
        this.costumer = costumer
        this.vehicle = vehicle
        this.dateString = dateString
        this.price = price
        if (!id) {
            this.id = this.id = UUidSetter.setId()
        }
    }
}