import { NextFunction, Request, Response } from 'express'
import { verify } from 'jsonwebtoken'

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(req: Request, res: Response, next: NextFunction) {
    const authHeader = req.headers.authorization
    if (!authHeader) throw new Error('token missing')
    const [, token] = authHeader.split(' ')
    try {
        const { sub: userId } = verify(token, process.env.JWT_SECRET) as IPayload
        req.user = {
            id: userId
        }
        next()
    } catch {
        throw new Error('invalid token')
    }
}