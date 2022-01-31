import { NextFunction, Request, Response } from "express";
import { AdminRepositoryPrisma } from "../../repositories/prisma/AdminRepositoryPrisma";
import { EmployeeRepositoryPrisma } from "../../repositories/prisma/EmployeeRepositoryPrisma";

export async function ensureEmployee(req: Request, res: Response, next: NextFunction){
    const { id } = req.user
    const employeeRepository = new EmployeeRepositoryPrisma()
    const user = await employeeRepository.findByUserId(id)
    if(!user) throw new Error('user not admin')
    return next()
}