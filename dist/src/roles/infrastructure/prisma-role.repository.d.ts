import { PrismaService } from '../../prisma/prisma.service';
import { RoleRepository } from '../domain/role.repository';
import { Role } from '../domain/role.entity';
export declare class PrismaRoleRepository implements RoleRepository {
    private readonly prisma;
    constructor(prisma: PrismaService);
    create(role: Role): Promise<Role>;
    findByName(name: string): Promise<Role | null>;
    findById(id: string): Promise<Role | null>;
}
