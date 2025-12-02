import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import { RoleRepository } from '../../roles/domain/role.repository';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateUserUseCase {
  constructor(
    private readonly userRepository: UserRepository,
    private readonly roleRepository: RoleRepository,
  ) { }

  async execute(user: Partial<User>, roleId: string): Promise<User> {
    if (!user.password || !user.email || !user.telephone || !user.document || !user.pix || !user.name) {
      throw new Error('Missing required user fields');
    }

    const existingUser = await this.userRepository.findByEmail(user.email ?? '');
    if (existingUser) {
      throw new ConflictException('Email already in use');
    }

    const role = await this.roleRepository.findById(roleId);
    if (!role) {
      throw new NotFoundException('Role not found');
    }

    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = new User({
      ...user,
      id: uuidv4(),
      password: hashedPassword,
      roles: [role],
    });
    return this.userRepository.create(newUser);
  }
}
