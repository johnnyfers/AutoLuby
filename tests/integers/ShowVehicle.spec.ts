import { ShowVehicle } from "../../src/app/appServices/vehicles/ShowVehicle"
import { VehicleRepositoryInMemory } from "../../src/infra/repositories/inMemory/VehicleRepositoryInMemory"

test('should be able to show a vehicles', async () => {
    const payload = {
        vehicleId: '444444-2323-sdf4543'
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const showVehicle = new ShowVehicle(vehicleRepository)
    const vehicle = await showVehicle.execute(payload)
    expect(vehicle.id).toBe(payload.vehicleId)
})

test('should throw an error if the vehicle is not found', () => {
    const payload = {
        vehicleId: ''
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const showVehicle = new ShowVehicle(vehicleRepository)
    expect(async () => await showVehicle.execute(payload)).rejects.toThrowError('Vehicle not found')
})
