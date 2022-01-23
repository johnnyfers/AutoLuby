import { UpdateVehicle } from "../../src/app/appServices/vehicles/UpdateVehicle"
import { VehicleRepositoryInMemory } from "../../src/infra/repositories/inMemory/VehicleRepositoryInMemory"

test('should be able to update a vehicle', async () => {
    expect.assertions(3)
    const payload = {
        vehicleId: '444444-2323-sdf4543',
        km: 70000,
        price: 208000
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const updateVehicle = new UpdateVehicle(vehicleRepository)
    const vehicle =  await updateVehicle.execute(payload)
    expect(vehicle.message).toBe('Vehicle updated successfully')
    expect(vehicle.vehicle.km).toBe(payload.km)
    expect(vehicle.vehicle.price).toBe(payload.price)
})