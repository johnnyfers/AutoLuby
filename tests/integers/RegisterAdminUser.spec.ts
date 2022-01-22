import { RegisterAdminUser } from "../../src/app/appServices/RegisterAdminUser"
import { AdminRepositoryInMemory } from "../../src/infra/repositories/inMemory/AdminRepositoryInMemory"
import { UserRepositoryInMemory } from "../../src/infra/repositories/inMemory/UserRepositoryInMemory"

test('should be able to register an Admin user', async () => {
    const payload = {
        email: 'test@example.com',
        name: 'Ze',
        password: '12345678',
    }
    const userRepository = new UserRepositoryInMemory()
    const adminRepository = new AdminRepositoryInMemory()
    const adminRegister = new RegisterAdminUser(userRepository, adminRepository)
    const admin = await adminRegister.execute(payload)
    expect(admin).toHaveProperty('id')
})