import { NextFunction, Request, Response } from "express";
import { AdminRepositoryPrisma } from "../../repositories/prisma/AdminRepositoryPrisma";

export async function ensureAdmin(req: Request, res: Response, next: NextFunction){
    const { id } = req.user
    const adminRepository = new AdminRepositoryPrisma()
    const user = await adminRepository.findByUserId(id)
    if(!user) throw new Error('user not admin')
    return next()
}