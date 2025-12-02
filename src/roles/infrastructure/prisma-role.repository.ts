import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { RoleRepository } from '../domain/role.repository';
import { Role } from '../domain/role.entity';

@Injectable()
export class PrismaRoleRepository implements RoleRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(role: Role): Promise<Role> {
    const createdRole = await this.prisma.role.create({ data: role });
    return new Role(createdRole);
  }

  async findByName(name: string): Promise<Role | null> {
    const role = await this.prisma.role.findUnique({ where: { name } });
    return role ? new Role(role) : null;
  }

  async findById(id: string): Promise<Role | null> {
    const role = await this.prisma.role.findUnique({ where: { id } });
    return role ? new Role(role) : null;
  }
}
