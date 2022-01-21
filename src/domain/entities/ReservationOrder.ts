import { UUidSetter } from "../services/UuidSetter"

export class ReservationOrder {
    employeeId: string
    costumerId: string
    vehicleId: string
    totalPrice: number
    dateString: string
    id?: string

    constructor(employeeId: string, costumerId: string, vehicleId: string, dateString: string, id?: string) {
        if(!id){
            this.id = UUidSetter.setId()
        }
        this.employeeId = employeeId
        this.costumerId = costumerId
        this.vehicleId = vehicleId
        this.dateString = dateString
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