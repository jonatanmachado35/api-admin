import { Injectable, ConflictException } from '@nestjs/common';
import { RoleRepository } from '../domain/role.repository';
import { Role } from '../domain/role.entity';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateRoleUseCase {
  constructor(private readonly roleRepository: RoleRepository) { }

  async execute(name: string): Promise<Role> {
    const existingRole = await this.roleRepository.findByName(name);
    if (existingRole) {
      throw new ConflictException('Role already exists');
    }

    const newRole = new Role({
      id: uuidv4(),
      name,
      created_at: new Date(),
    });

    return this.roleRepository.create(newRole);
  }
}
