import { SoftDeleteEmployee } from "../../src/app/appServices/SoftDeleteEmployee"
import { EmployeeRepositoryInMemory } from "../../src/infra/repositories/inMemory/EmployeeRepositoryInMemory"
import { UserRepositoryInMemory } from "../../src/infra/repositories/inMemory/UserRepositoryInMemory"

test('should be able to soft delete an employee user', async () => {
    const payload = {
        employeeId: '111asd-sadas22-3434343'
    }
    const userRepository = new UserRepositoryInMemory()
    const employeeRepository = new EmployeeRepositoryInMemory()
    const softDeleteEmployee = new SoftDeleteEmployee(userRepository, employeeRepository)
    const result = await softDeleteEmployee.execute(payload)
    expect(result.message).toBe('Employee deleted successfully')
})

test('should throw an error if employee user is not active', async () => {
    const payload = {
        employeeId: '111asd-sadas22-9999999'
    }
    const userRepository = new UserRepositoryInMemory()
    const employeeRepository = new EmployeeRepositoryInMemory()
    const softDeleteEmployee = new SoftDeleteEmployee(userRepository, employeeRepository)
    expect(async ()=> await softDeleteEmployee.execute(payload)).rejects.toThrowError('Employee already deleted')
})