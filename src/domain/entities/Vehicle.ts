import { UUidSetter } from "../services/UuidSetter"

export class Vehicle {
    brand: string
    model: string
    year: number
    km: number
    color: string
    chassis: string
    price: number
    status: string
    id?: string

    constructor(brand: string, model: string, year: number, km: number, color: string, chassis: string, price: number, status: string, id?: string) {
        this.id = id
        this.brand = brand
        this.model = model
        this.year = year
        this.km = km
        this.color = color
        this.chassis = chassis
        this.price = price
        this.status = status
        if (!id) {
            this.id = UUidSetter.setId()
        }
    }

}