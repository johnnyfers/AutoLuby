import { Router } from 'express';
import { RegisterEmployeeUserController } from '../../../app/controllers/employees/RegisterEmployeeUserController';
import { ListEmployeesController } from '../../../app/controllers/employees/ListEmployeeController';
import { ShowEmployeeController } from '../../../app/controllers/employees/ShowEmployeeController';
import { SoftDeleteEmployeeController } from '../../../app/controllers/employees/SoftDeleteEmployeeController';
import { UpdateEmployeeController } from '../../../app/controllers/employees/UpdateEmployeeController';

const employeeRoutes = Router()
const registerEmployeeUserController = new RegisterEmployeeUserController()
const listEmployeeController = new ListEmployeesController()
const showEmployeeController = new ShowEmployeeController()
const softDeleteEmployeeController = new SoftDeleteEmployeeController()
const updateEmployeeController = new UpdateEmployeeController()

employeeRoutes.post('/register', registerEmployeeUserController.handle)
employeeRoutes.put('/:employeeId', updateEmployeeController.handle)
employeeRoutes.get('/', listEmployeeController.handle)
employeeRoutes.get('/:employeeId', showEmployeeController.handle)
employeeRoutes.delete('/:employeeId', softDeleteEmployeeController.handle)

export { employeeRoutes }