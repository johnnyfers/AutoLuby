import { PrismaClient } from "@prisma/client";
import { UpdateEmployeeInput } from "../../../app/dtos/employees/UpdateEmployeeDTOs";
import { Employee } from "../../../domain/entities/Employee";
import { EmployeeRepository } from "../../../domain/repositories/EmployeeRepository"

export class EmployeeRepositoryPrisma implements EmployeeRepository {
    prisma: PrismaClient

    constructor() {
        this.prisma = new PrismaClient()
    }


    async save(employee: Employee): Promise<void> {
        this.prisma.employee.create({ data: employee })
    }

    async findById(id: string): Promise<Employee> {
        return await this.prisma.employee.findUnique({
            where: {
                id: id,
            },
            include: {
                user: true
            }
        })
    }

    async getAllActiveEmployees(): Promise<Employee[]> {
        return await this.prisma.employee.findMany({
            where: {
                user: {
                    isActive: true
                }
            },
            include: {
                user: true
            },
        })
    }

    async updateEmployee(updatePayload: UpdateEmployeeInput): Promise<Employee> {
        const { employeeId, jobPosition, annualSalary } = updatePayload
        return await this.prisma.employee.update({
            where: {
                id: employeeId
            },
            data: {
                jobPosition,
                annualSalary
            },
            include: {
                user: true
            }
        })
    }

    async findByUserId(id: string): Promise<Employee> {
        return this.prisma.employee.findUnique({
            where: {
                userId: id
            },
            include: {
                user: true
            }
        })
    }
}