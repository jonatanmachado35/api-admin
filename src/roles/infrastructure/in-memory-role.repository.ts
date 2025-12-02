import { Injectable } from '@nestjs/common';
import { Role } from '../domain/role.entity';
import { RoleRepository } from '../domain/role.repository';

@Injectable()
export class InMemoryRoleRepository implements RoleRepository {
  private roles: Role[] = [];

  async create(role: Role): Promise<Role> {
    this.roles.push(role);
    return role;
  }

  async findByName(name: string): Promise<Role | null> {
    return this.roles.find((r) => r.name === name) || null;
  }

  async findById(id: string): Promise<Role | null> {
    return this.roles.find((r) => r.id === id) || null;
  }
}
