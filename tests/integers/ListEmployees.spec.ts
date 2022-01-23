import { ListEmployees } from "../../src/app/appServices/employees/ListEmployees"
import { EmployeeRepositoryInMemory } from "../../src/infra/repositories/inMemory/EmployeeRepositoryInMemory"

test('should be able to list all active employees', async () => {
    const employeesRepository = new EmployeeRepositoryInMemory()
    const listEmployees = new ListEmployees(employeesRepository)
    const employees = await listEmployees.execute()
    expect(employees.employees).toHaveLength(3)
})