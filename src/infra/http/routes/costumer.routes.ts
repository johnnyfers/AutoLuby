import { Router } from 'express';
import { RegisterCostumerUserController } from '../../../app/controllers/costumers/RegisterCostumerUserController';

const costumerRoutes = Router()
const registerCostumerUserController = new RegisterCostumerUserController();
costumerRoutes.post('/register', registerCostumerUserController.handle)
export { costumerRoutes }