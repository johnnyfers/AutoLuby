import { Router } from 'express';
import { RegisterEmployeeUserController } from '../../../app/controllers/employees/RegisterEmployeeUserController';
import { ListEmployeesController } from '../../../app/controllers/employees/ListEmployeeController';
import { ShowEmployeeController } from '../../../app/controllers/employees/ShowEmployeeController';
import { SoftDeleteEmployeeController } from '../../../app/controllers/employees/SoftDeleteEmployeeController';
import { UpdateEmployeeController } from '../../../app/controllers/employees/UpdateEmployeeController';
import { ensureAuthenticated } from '../middlewares/authUser';
import { ensureAdmin } from '../middlewares/authAdmin';

const employeeRoutes = Router()
const registerEmployeeUserController = new RegisterEmployeeUserController()
const listEmployeeController = new ListEmployeesController()
const showEmployeeController = new ShowEmployeeController()
const softDeleteEmployeeController = new SoftDeleteEmployeeController()
const updateEmployeeController = new UpdateEmployeeController()

employeeRoutes.post('/register', ensureAuthenticated, ensureAdmin, registerEmployeeUserController.handle)
employeeRoutes.put('/:employeeId', ensureAuthenticated, ensureAdmin, updateEmployeeController.handle)
employeeRoutes.get('/', ensureAuthenticated, listEmployeeController.handle)
employeeRoutes.get('/:employeeId', ensureAuthenticated, showEmployeeController.handle)
employeeRoutes.delete('/:employeeId', ensureAuthenticated, ensureAdmin, softDeleteEmployeeController.handle)

export { employeeRoutes }