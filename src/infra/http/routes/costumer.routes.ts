import { Router } from 'express';
import { RegisterCostumerUserController } from '../../../app/controllers/costumers/RegisterCostumerUserController';
import { ensureEmployee } from '../middlewares/authEmployee';
import { ensureAuthenticated } from '../middlewares/authUser'

const costumerRoutes = Router()
const registerCostumerUserController = new RegisterCostumerUserController();
costumerRoutes.post('/register', ensureAuthenticated, ensureEmployee, registerCostumerUserController.handle)
export { costumerRoutes }