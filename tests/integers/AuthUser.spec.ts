import { AuthUser } from "../../src/app/appServices/account/AuthUser"
import { UserRepositoryInMemory } from "../../src/infra/repositories/inMemory/UserRepositoryInMemory"

test('should be able to authenticate a user', async () => {
    const payload = {
        email: 'fake77@email.com',
        password: 'fake'
    }
    const userRepository = new UserRepositoryInMemory()
    const authUser = new AuthUser(userRepository)
    const tokenReturn = await authUser.execute(payload)
    expect(tokenReturn.user.email).toBe(payload.email)
})

test('should be able to throw an error if password or email are incorrect', () => {
    const payload = {
        email: 'user@example.com',
        password: '123'
    }
    const userRepository = new UserRepositoryInMemory()
    const authUser = new AuthUser(userRepository)
    expect(async ()=> await authUser.execute(payload)).rejects.toThrowError('Email or password incorrect')
})