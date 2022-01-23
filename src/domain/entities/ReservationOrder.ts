import { UUidSetter } from "../services/UuidSetter"
import { Costumer } from "./Costumer"
import { Employee } from "./Employee"
import { Vehicle } from "./Vehicle"

export class ReservationOrder {
    employee: Employee
    costumer: Costumer
    vehicle: Vehicle
    totalPrice: number
    dateString: string
    id?: string

    constructor(employee: Employee, costumer: Costumer, vehicle: Vehicle, dateString: string, id?: string) {
        this.id = id
        this.employee = employee
        this.costumer = costumer
        this.vehicle = vehicle
        this.dateString = dateString
        if(!id){
            this.id = UUidSetter.setId()
        }
    }

    getReservationPrice(vehiclePrice: number): number {
        if (vehiclePrice <= 50000) {
            this.totalPrice = 100
        }
        if (vehiclePrice > 50000 && vehiclePrice <= 100000) {
            this.totalPrice = 150
        }
        if (vehiclePrice > 100000) {
            this.totalPrice =  300
        }
        return this.totalPrice
    }
}