import { Router } from 'express';
import { accountRoutes } from './account.routes';
import { adminRoutes } from './admin.routes';
import { costumerRoutes } from './costumer.routes';
import { employeeRoutes } from './employee.routes';
import { vehicleRoutes } from './vehicle.routes';

const router = Router()
router.use('/employee/', employeeRoutes)
router.use('/admin/', adminRoutes)
router.use('/costumer/', costumerRoutes)
router.use('/vehicle/', vehicleRoutes)
router.use('/account/', accountRoutes)

export { router }