import { Module } from '@nestjs/common';
import { RolesController } from './presentation/roles.controller';
import { CreateRoleUseCase } from './application/create-role.use-case';
import { RoleRepository } from './domain/role.repository';
import { InMemoryRoleRepository } from './infrastructure/in-memory-role.repository';

@Module({
  controllers: [RolesController],
  providers: [
    CreateRoleUseCase,
    {
      provide: RoleRepository,
      useClass: InMemoryRoleRepository,
    },
  ],
  exports: [RoleRepository],
})
export class RolesModule { }
