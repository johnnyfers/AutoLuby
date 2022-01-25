import 'dotenv/config'
import 'reflect-metadata'
import 'express-async-errors'
import express, { Request, Response, NextFunction } from 'express'

const app = express()
app.use(express.json())
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
    if (err) {
        return res.json({ message: err.message })
    }
    return res.status(500).json({ status: 'error', message: `internal server error - ${err.message}` })
})

export { app }