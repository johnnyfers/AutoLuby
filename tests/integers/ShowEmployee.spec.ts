import { ShowEmployee } from "../../src/app/appServices/employees/ShowEmployee"
import { EmployeeRepositoryInMemory } from "../../src/infra/repositories/inMemory/EmployeeRepositoryInMemory"

test('should be able to list all employees', async () => {
    const payload = { employeeId: '111asd-sadas22-3434343'}
    const employeeRepository = new EmployeeRepositoryInMemory()
    const showEmployee = new ShowEmployee(employeeRepository)
    const employee = await showEmployee.execute(payload)
    expect(employee.employee.id).toBe('111asd-sadas22-3434343')
})