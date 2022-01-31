import { Router } from 'express';
import { RegisterAdminUserController } from '../../../app/controllers/admins/RegisterAdminUserController';
import { ensureAuthenticated } from '../middlewares/authUser'
import { ensureAdmin } from '../middlewares/authAdmin'

const adminRoutes = Router()
const registerAdminUserController = new RegisterAdminUserController();
adminRoutes.post('/register', ensureAuthenticated, ensureAdmin, registerAdminUserController.handle)
export { adminRoutes }