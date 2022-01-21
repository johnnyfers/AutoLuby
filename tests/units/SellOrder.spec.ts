import { SellOrder } from "../../src/domain/entities/SellOrder"

test('should be able to create a sellOrder', () => {
    const sellOrder = new SellOrder('122323-2323-sdf4543', '122323-2323-sdf4543', '122323-2323-sdf4543', '12-11-2021')
    expect(sellOrder).toHaveProperty('id')
})