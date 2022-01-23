import { UpdateEmployee } from "../../src/app/appServices/UpdateEmployee"
import { EmployeeRepositoryInMemory } from "../../src/infra/repositories/inMemory/EmployeeRepositoryInMemory"

test('should be able to update employee annualSalary', async () => {
    const payload = {
        employeeId: '111asd-sadas22-3434343',
        annualSalary: 100000
    }
    const employeeRepository = new EmployeeRepositoryInMemory()
    const updateEmployee = new UpdateEmployee(employeeRepository)
    const employee = await updateEmployee.execute(payload)
    expect(employee.employee.annualSalary).toBe(100000)
})

test('should be able to update employee job position', async () => {
    const payload = {
        employeeId: '111asd-sadas22-3434343',
        jobPosition: 'CTO'
    }
    const employeeRepository = new EmployeeRepositoryInMemory()
    const updateEmployee = new UpdateEmployee(employeeRepository)
    const employee = await updateEmployee.execute(payload)
    expect(employee.employee.jobPosition).toBe('CTO')
})