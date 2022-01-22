import { Admin } from "../../src/domain/entities/Admin"
import { Costumer } from "../../src/domain/entities/Costumer"
import { Employee } from "../../src/domain/entities/Employee"
import { User } from "../../src/domain/entities/User"

test('should be able to create an admin user', () => {
    const user = new User('fake@email.com', 'fake', 'fake', true)
    const admin = new Admin(user)
    expect(admin).toHaveProperty('id')
})

test('should be able to create an employee user', () => {
    const user = new User('fake@email.com', 'fake', 'fake', true)
    const employee = new Employee(50000, 'manager', user)
    expect(employee).toHaveProperty('id')
})

test('should be able to create a costumer user', () => {
    const user = new User('fake@email.com', 'fake', 'fake', true)
    const costumer = new Costumer(user)
    expect(costumer).toHaveProperty('id')
})