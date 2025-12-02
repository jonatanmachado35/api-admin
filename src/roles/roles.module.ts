import { Module } from '@nestjs/common';
import { RolesController } from './presentation/roles.controller';
import { CreateRoleUseCase } from './application/create-role.use-case';
import { RoleRepository } from './domain/role.repository';
import { PrismaRoleRepository } from './infrastructure/prisma-role.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [RolesController],
  providers: [
    CreateRoleUseCase,
    {
      provide: RoleRepository,
      useClass: PrismaRoleRepository,
    },
  ],
  exports: [RoleRepository],
})
export class RolesModule { }
