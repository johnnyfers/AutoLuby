import { Router } from 'express';
import { ListVehiclesController } from '../../../app/controllers/vehicles/ListVehicleController';
import { ObtainVehicleController } from '../../../app/controllers/vehicles/ObtainVehicleController';
import { ReserveVehicleController } from '../../../app/controllers/vehicles/ReserveVehicleController';
import { SellVehicleController } from '../../../app/controllers/vehicles/SellVehicleController';
import { SoftDeleteVehicleController } from '../../../app/controllers/vehicles/SoftDeleteVehicleController';
import { UpdateVehicleController } from '../../../app/controllers/vehicles/UpdateVehicleController';
import { ensureAdmin } from '../middlewares/authAdmin';
import { ensureEmployee } from '../middlewares/authEmployee';
import { ensureAuthenticated } from '../middlewares/authUser';

const vehicleRoutes = Router()
const listVehiclesController = new ListVehiclesController()
const obtainVehicleController = new ObtainVehicleController()
const reserveVehicleController = new ReserveVehicleController()
const sellVehicleController = new SellVehicleController()
const updateVehicleController = new UpdateVehicleController()
const softDeleteVehicleController = new SoftDeleteVehicleController()

vehicleRoutes.get('/', listVehiclesController.handle)
vehicleRoutes.post('/',ensureAuthenticated, ensureAdmin, obtainVehicleController.handle)
vehicleRoutes.post('/reservation/:employeeId/:costumerId/:vehicleId', ensureAuthenticated, ensureEmployee, reserveVehicleController.handle)
vehicleRoutes.post('/selling/:employeeId/:costumerId/:vehicleId', ensureAuthenticated, ensureEmployee, sellVehicleController.handle)
vehicleRoutes.put('/:vehicleId', ensureAuthenticated, ensureAdmin, updateVehicleController.handle)
vehicleRoutes.delete('/:vehicleId', ensureAuthenticated, ensureAdmin, softDeleteVehicleController.handle)

export { vehicleRoutes }