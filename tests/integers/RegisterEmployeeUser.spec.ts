import { RegisterEmployeeUser } from "../../src/app/appServices/RegisterEmployeeUser"
import { EmployeeRepositoryInMemory } from "../../src/infra/repositories/inMemory/EmployeeRepositoryInMemory"
import { UserRepositoryInMemory } from "../../src/infra/repositories/inMemory/UserRepositoryInMemory"

test('should be able to register an employee user', async () => {
    const payload = {
        email: 'test@example.com',
        name: 'Ze',
        password: '12345678',
        jobPosition: 'Saler',
        annualSalary: 40000
    }

    const userRepository = new UserRepositoryInMemory()
    const employeeRepository = new EmployeeRepositoryInMemory()
    const employeeRegister = new RegisterEmployeeUser(userRepository, employeeRepository)
    const employee = await employeeRegister.execute(payload)
    expect(employee).toHaveProperty('id')
})