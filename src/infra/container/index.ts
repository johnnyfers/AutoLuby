import { container } from 'tsyringe';
import { AdminRepository } from '../../domain/repositories/AdminRepository';
import { CostumerRepository } from '../../domain/repositories/CostumerRepository';
import { EmployeeRepository } from '../../domain/repositories/EmployeeRepository';
import { ReservationOrderRepository } from '../../domain/repositories/ReservationOrderRepository';
import { SellOrderRepository } from '../../domain/repositories/SellOrderRepository';
import { UserRepository } from '../../domain/repositories/UserRepository';
import { VehicleRepository } from '../../domain/repositories/VehicleRepository';
import { AdminRepositoryPrisma } from '../repositories/prisma/AdminRepositoryPrisma';
import { CostumerRepositoryPrisma } from '../repositories/prisma/CostumerRepositoryPrisma';
import { EmployeeRepositoryPrisma } from '../repositories/prisma/EmployeeRepositoryPrisma';
import { ReservationOrderRepositoryPrisma } from '../repositories/prisma/ReservationOrderPrisma';
import { SellOrderRepositoryPrisma } from '../repositories/prisma/SellOrderRepositoryPrisma';
import { UserRepositoryPrisma } from '../repositories/prisma/UserRepositoryPrisma';
import { VehicleRepositoryPrisma } from '../repositories/prisma/VehicleRepositoryPrisma';

container.registerSingleton<UserRepository>(
    'UserRepository',
    UserRepositoryPrisma
)

container.registerSingleton<AdminRepository>(
    'AdminRepository',
    AdminRepositoryPrisma
)

container.registerSingleton<CostumerRepository>(
    'CostumerRepository',
    CostumerRepositoryPrisma
)

container.registerSingleton<EmployeeRepository>(
    'EmployeeRepository',
    EmployeeRepositoryPrisma
)

container.registerSingleton<ReservationOrderRepository>(
    'ReservationOrderRepository',
    ReservationOrderRepositoryPrisma
)

container.registerSingleton<SellOrderRepository>(
    'SellOrderRepository',
    SellOrderRepositoryPrisma
)

container.registerSingleton<VehicleRepository>(
    'VehicleRepository',
    VehicleRepositoryPrisma
)