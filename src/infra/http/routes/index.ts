import { Router } from 'express';
import { RegisterAdminUserController } from '../../../app/controllers/admins/RegisterAdminUserController';

const router = Router()
const registerAdminUserController = new RegisterAdminUserController();
router.post('/admins/register', registerAdminUserController.handle)
export {router}