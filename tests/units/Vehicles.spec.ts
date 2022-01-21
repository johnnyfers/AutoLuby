import { Vehicle } from "../../src/domain/entities/Vehicle"

test('should be able to create a veihicle', () => {
    const vehicle = new Vehicle('BMW', 'M1', 2018, 10300, 'blue', '123hsadas23', 150000, 'status')
    expect(vehicle).toHaveProperty('id')
})