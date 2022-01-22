import { ReserveVehicle } from "../../src/app/appServices/ReserveVehicle"
import { CostumerRepositoryInMemory } from "../../src/infra/repositories/inMemory/CostumerRepositoryInMemory"
import { EmployeeRepositoryInMemory } from "../../src/infra/repositories/inMemory/EmployeeRepositoryInMemory"
import { ReservationOrderRepositoryInMemory } from "../../src/infra/repositories/inMemory/ReservationOrderRepositoryInMemory"
import { VehicleRepositoryInMemory } from "../../src/infra/repositories/inMemory/VehicleRepositoryInMemory"

test('should be able to reserve a vehicle', async () => {
    expect.assertions(2)
    const payload = {
        employeeId: '111asd-sadas22-3434343',
        costumerId: '111asd-sadas22-223232',
        vehicleId: '444444-2323-sdf4543',
        date: new Date()
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const costumerRepository = new CostumerRepositoryInMemory()
    const employeeRepository = new EmployeeRepositoryInMemory()
    const reservationOrderRepository = new ReservationOrderRepositoryInMemory()
    const reserveVehicle = new ReserveVehicle(vehicleRepository, costumerRepository, employeeRepository, reservationOrderRepository)
    const reservation = await reserveVehicle.execute(payload)
    expect(reservation.reservationPrice).toBe(300)
    expect(reservation.message).toBe('vehicle reserved successfully')
})

test('should not be able to reserve a vehicle that is not available', () => {
    const payload = {
        employeeId: '111asd-sadas22-3434343',
        costumerId: '111asd-sadas22-223232',
        vehicleId: '324324-sadsdf454-dfsd44',
        date: new Date()
    }
    const vehicleRepository = new VehicleRepositoryInMemory()
    const costumerRepository = new CostumerRepositoryInMemory()
    const employeeRepository = new EmployeeRepositoryInMemory()
    const reservationOrderRepository = new ReservationOrderRepositoryInMemory()
    const reservation = new ReserveVehicle(vehicleRepository, costumerRepository, employeeRepository, reservationOrderRepository)
    expect(async () => await reservation.execute(payload)).rejects.toThrowError('Vehicle not available')
})