import { Admin } from "../../src/domain/entities/Admin"
import { Costumer } from "../../src/domain/entities/Costumer"
import { Employee } from "../../src/domain/entities/Employee"

test('should be able to create an admin user', () => {
    const admin = new Admin('fake@email.com', 'fake', 'fake', true)
    expect(admin).toHaveProperty('id')
})

test('should be able to create an employee user', () => {
    const employee = new Employee('fake@email.com', 'fake', 'fake', true, 50000, 'manager')
    expect(employee).toHaveProperty('id')
})

test('should be able to create a costumer user', () => {
    const costumer = new Costumer('fake@email.com', 'fake', 'fake', true)
    expect(costumer).toHaveProperty('id')
})