import { ObtainVehicle } from "../../src/app/appServices/ObtainVehicle"
import { VehicleRepositoryInMemory } from "../../src/infra/repositories/inMemory/VehicleRepositoryInMemory"

test('should be able to obtain a vehicle', async () => {
    const payload = {
        brand: 'BMW',
        model: 'M1',
        year: 2018,
        km: 10000,
        color: 'yellow',
        chassis: '123hsadas23',
        price: 200000,
        status: 'available'
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const obtainVehicle = new ObtainVehicle(vehicleRepository)
    const vehicle =  await obtainVehicle.execute(payload)
    expect(vehicle.message).toBe('vehicle obtained successfully')
})