import { SoftDeleteVehicle } from "../../src/app/appServices/vehicles/SoftDeleteVehicle"
import { VehicleRepositoryInMemory } from "../../src/infra/repositories/inMemory/VehicleRepositoryInMemory"

test('should be able to soft delete a vehicle by updating its status', async () => {
    const payload = {
        vehicleId: '444444-2323-sdf4543'
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const softDeleteVehicle = new SoftDeleteVehicle(vehicleRepository)
    const vehicle = await softDeleteVehicle.execute(payload)
    expect(vehicle.message).toBe('Vehicle deleted successfully')
}) 