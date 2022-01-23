import { Costumer } from "../../src/domain/entities/Costumer"
import { Employee } from "../../src/domain/entities/Employee"
import { ReservationOrder } from "../../src/domain/entities/ReservationOrder"
import { User } from "../../src/domain/entities/User"
import { Vehicle } from "../../src/domain/entities/Vehicle"

test('should be able to create a ReservationOrder', () => {
    const user = new User('fake@email.com', 'fake', 'fake', true)
    const employee = new Employee(50000, 'manager', user)
    const costumer = new Costumer(user)
    const vehicle = new Vehicle('BMW', 'M1', 2018, 10300, 'blue', '123hsadas23', 150000, 'status')
    const reservationOrder = new ReservationOrder(employee, costumer, vehicle, '12-11-2021')
    expect(reservationOrder).toHaveProperty('id')
})

test('should be able to get the reservation price for a 150k Vehicle', () => {
    const user = new User('fake@email.com', 'fake', 'fake', true)
    const employee = new Employee(50000, 'manager', user)
    const costumer = new Costumer(user)
    const vehicle = new Vehicle('BMW', 'M1', 2018, 10300, 'blue', '123hsadas23', 150000, 'status')
    const reservationOrder = new ReservationOrder(employee, costumer, vehicle, '12-11-2021')
    const price = reservationOrder.getReservationPrice(150000)
    expect(price).toBe(300)
})

test('should be able to get the reservation price for a 30k Vehicle', () => {
    const user = new User('fake@email.com', 'fake', 'fake', true)
    const employee = new Employee(50000, 'manager', user)
    const costumer = new Costumer(user)
    const vehicle = new Vehicle('BMW', 'M1', 2018, 10300, 'blue', '123hsadas23', 150000, 'status')
    const reservationOrder = new ReservationOrder(employee, costumer, vehicle, '12-11-2021')
    const price = reservationOrder.getReservationPrice(30000)
    expect(price).toBe(100)
})