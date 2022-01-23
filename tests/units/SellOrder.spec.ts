import { Admin } from "../../src/domain/entities/Admin"
import { Costumer } from "../../src/domain/entities/Costumer"
import { Employee } from "../../src/domain/entities/Employee"
import { SellOrder } from "../../src/domain/entities/SellOrder"
import { User } from "../../src/domain/entities/User"
import { Vehicle } from "../../src/domain/entities/Vehicle"

test('should be able to create a sellOrder', () => {
    const user = new User('fake@email.com', 'fake', 'fake', true)
    const employee = new Employee(50000, 'manager', user)
    const costumer = new Costumer(user)
    const vehicle = new Vehicle('BMW', 'M1', 2018, 10300, 'blue', '123hsadas23', 150000, 'status')
    const sellOrder = new SellOrder(employee, costumer, vehicle, '12-11-2021', vehicle.price)
    expect(sellOrder).toHaveProperty('id')
})