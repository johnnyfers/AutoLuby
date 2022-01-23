import { ListVehicles } from "../../src/app/appServices/ListVehicles"
import { VehicleRepositoryInMemory } from "../../src/infra/repositories/inMemory/VehicleRepositoryInMemory"

test('should be able to list all vehicles', async () => {
    const payload = {}
    const vehicleRepository = new VehicleRepositoryInMemory()
    const listVehicles = new ListVehicles(vehicleRepository)
    const vehicles =  await listVehicles.execute(payload)
    expect(vehicles.vehicles).toHaveLength(2)
})

test('should be able to list all available vehicles', async () => {
    const payload = {
        status: 'available',
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const listVehicles = new ListVehicles(vehicleRepository)
    const vehicles =  await listVehicles.execute(payload)
    expect(vehicles.vehicles).toHaveLength(1)
})