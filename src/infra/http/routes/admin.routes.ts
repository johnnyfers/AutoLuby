import { Router } from 'express';
import { RegisterAdminUserController } from '../../../app/controllers/admins/RegisterAdminUserController';

const adminRoutes = Router()
const registerAdminUserController = new RegisterAdminUserController();
adminRoutes.post('/register', registerAdminUserController.handle)
export { adminRoutes }