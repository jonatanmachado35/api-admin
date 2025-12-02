import { Injectable } from '@nestjs/common';
import { PrismaService } from '../../prisma/prisma.service';
import { UserRepository } from '../domain/user.repository';
import { User } from '../domain/user.entity';
import { Role } from '../../roles/domain/role.entity';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) { }

  async create(user: User): Promise<User> {
    const { roles, ...userData } = user;

    const createdUser = await this.prisma.user.create({
      data: {
        ...userData,
        roles: roles
          ? {
            connect: roles.map((role) => ({ id: role.id })),
          }
          : undefined,
      },
      include: { roles: true },
    });

    return this.toDomain(createdUser);
  }

  async findByEmail(email: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { email },
      include: { roles: true },
    });
    return user ? this.toDomain(user) : null;
  }

  async findById(id: string): Promise<User | null> {
    const user = await this.prisma.user.findUnique({
      where: { id },
      include: { roles: true },
    });
    return user ? this.toDomain(user) : null;
  }

  async update(id: string, data: Partial<User>): Promise<void> {
    const { roles, ...userData } = data;

    await this.prisma.user.update({
      where: { id },
      data: {
        ...userData,
        ...(roles && roles.length
          ? { roles: { set: roles.map((role) => ({ id: role.id })) } }
          : {}),
      },
    });
  }

  private toDomain(user: any): User {
    return new User({
      ...user,
      roles: user.roles?.map((role: any) => new Role(role)),
    });
  }
}
