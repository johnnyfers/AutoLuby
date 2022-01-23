import { SellVehicle } from "../../src/app/appServices/vehicles/SellVehicle"
import { CostumerRepositoryInMemory } from "../../src/infra/repositories/inMemory/CostumerRepositoryInMemory"
import { EmployeeRepositoryInMemory } from "../../src/infra/repositories/inMemory/EmployeeRepositoryInMemory"
import { SellOrderRepositoryInMemory } from "../../src/infra/repositories/inMemory/SellOrderRepositoryInMemory"
import { VehicleRepositoryInMemory } from "../../src/infra/repositories/inMemory/VehicleRepositoryInMemory"

test('should be able to sell a vehicle', async () => {
    const payload = {
        employeeId: '111asd-sadas22-3434343',
        costumerId: '111asd-sadas22-223232',
        vehicleId: '444444-2323-sdf4543',
        date: new Date()
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const costumerRepository = new CostumerRepositoryInMemory()
    const employeeRepository = new EmployeeRepositoryInMemory()
    const sellOrderRepository = new SellOrderRepositoryInMemory()
    const sellVehicle = new SellVehicle(vehicleRepository, costumerRepository, employeeRepository, sellOrderRepository)
    const sell = await sellVehicle.execute(payload)
    expect(sell.message).toBe('vehicle sold successfully')
})

test('should not be able to sell a vehicle that is not available', () => {
    const payload = {
        employeeId: '111asd-sadas22-3434343',
        costumerId: '111asd-sadas22-223232',
        vehicleId: '324324-sadsdf454-dfsd44',
        date: new Date()
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const costumerRepository = new CostumerRepositoryInMemory()
    const employeeRepository = new EmployeeRepositoryInMemory()
    const sellOrderRepository = new SellOrderRepositoryInMemory()
    const sellVehicle = new SellVehicle(vehicleRepository, costumerRepository, employeeRepository, sellOrderRepository)
    expect(async () => await sellVehicle.execute(payload))
        .rejects
        .toThrowError('Vehicle not available')
})