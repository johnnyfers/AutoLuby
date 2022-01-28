import { Router } from 'express';
import { AuthUserController } from '../../../app/controllers/account/AuthUserController';
import { RegisterAdminUserController } from '../../../app/controllers/admins/RegisterAdminUserController';

const accountRoutes = Router()
const registerAdminUserController = new AuthUserController();
accountRoutes.post('/login', registerAdminUserController.handle)

export { accountRoutes }