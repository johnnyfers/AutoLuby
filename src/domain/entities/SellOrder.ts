import { UUidSetter } from "../services/UuidSetter"

export class SellOrder {
    employeeId: string
    costumerId: string
    vehicleId: string
    dateString: string
    id?: string

    constructor(employeeId: string, costumerId: string, vehicleId: string, dateString: string, id?: string) {
        this.id = id
        this.employeeId = employeeId
        this.costumerId = costumerId
        this.vehicleId = vehicleId
        this.dateString = dateString
        if (!id) {
            this.id = this.id = UUidSetter.setId()
        }
    }
}