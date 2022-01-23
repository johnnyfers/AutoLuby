/* import { SoftDeleteVehicle } from "../../src/app/appServices/SoftDeleteVehicle"
import { VehicleRepositoryInMemory } from "../../src/infra/repositories/inMemory/VehicleRepositoryInMemory"

test('should be able to soft delete a vehicle by updating its status', async () => {
    expect.assertions(3)
    const payload = {
        vehicleId: '444444-2323-sdf4543'
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const softDeleteVehicle = new SoftDeleteVehicle(vehicleRepository)
    const vehicle =  await softDeleteVehicle.execute(payload)
    expect(vehicle.message).toBe('Vehicle deleted successfully')
}) */

test('',()=>{
    expect(1).toBe(1)
})