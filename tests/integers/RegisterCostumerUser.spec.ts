import { RegisterCostumerUser } from "../../src/app/appServices/RegisterCostumerUser"
import { CostumerRepositoryInMemory } from "../../src/infra/repositories/inMemory/CostumerRepositoryInMemory"
import { UserRepositoryInMemory } from "../../src/infra/repositories/inMemory/UserRepositoryInMemory"

test('should be able to register an Costumer user', async () => {
    const payload = {
        email: 'test@example.com',
        name: 'Ze',
        password: '12345678',
    }
    const userRepository = new UserRepositoryInMemory()
    const costumerRepository = new CostumerRepositoryInMemory()
    const CostumerRegister = new RegisterCostumerUser(userRepository, costumerRepository)
    const costumer = await CostumerRegister.execute(payload)
    expect(costumer).toHaveProperty('id')
})