import { ReservationOrder } from "../../src/domain/entities/ReservationOrder"

test('should be able to create a ReservationOrder', () => {
    const reservationOrder = new ReservationOrder('122323-2323-sdf4543', '122323-2323-sdf4543', '122323-2323-sdf4543', '12-11-2021')
    expect(reservationOrder).toHaveProperty('id')
})

test('should be able to get the reservation price for a 150k Vehicle', () => {
    const reservationOrder = new ReservationOrder('122323-2323-sdf4543', '122323-2323-sdf4543', '122323-2323-sdf4543', '12-11-2021')
    const price = reservationOrder.getReservationPrice(150000)
    expect(price).toBe(300)
})

test('should be able to get the reservation price for a 30k Vehicle', () => {
    const reservationOrder = new ReservationOrder('122323-2323-sdf4543', '122323-2323-sdf4543', '122323-2323-sdf4543', '12-11-2021')
    const price = reservationOrder.getReservationPrice(30000)
    expect(price).toBe(100)
})