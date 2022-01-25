import { UserLogin } from "../../src/domain/entities/UserLogin"
import { JsonWebToken } from "../../src/domain/services/JsonWebToken"

test('should be able to create a token and refresh token', () => {
    expect.assertions(2)
    const jwt = new JsonWebToken()
    const userLogin = new UserLogin('test@example', '123456', jwt)
    const token = userLogin.getToken('asd-sadsa-sdasd')
    const refreshToken = userLogin.getRefreshToken(userLogin.email, 'asd-sadsa-sdasd')
    expect(token).toBeTruthy()
    expect(refreshToken).toBeTruthy()
})