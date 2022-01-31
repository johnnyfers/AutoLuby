import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'
import '../container/index'
import express, { Request, Response, NextFunction } from 'express'
import { router } from './routes'

const app = express()
app.use(express.json())
app.use(router)
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        return res.status(400).json({ message: err.message })
    }
    return res.status(500).json({ status: 'error', message: `internal server error - ${err.message}` })
})

export { app }