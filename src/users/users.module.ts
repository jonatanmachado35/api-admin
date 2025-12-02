import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './application/create-user.use-case';
import { FindUserUseCase } from './application/find-user.use-case';
import { UserRepository } from './domain/user.repository';
import { UsersController } from './presentation/users.controller';
import { RolesModule } from '../roles/roles.module';
import { PrismaUserRepository } from './infrastructure/prisma-user.repository';
import { PrismaModule } from '../prisma/prisma.module';

@Module({
  imports: [RolesModule, PrismaModule],
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    FindUserUseCase,
    {
      provide: UserRepository,
      useClass: PrismaUserRepository,
    },
  ],
  exports: [CreateUserUseCase, FindUserUseCase, UserRepository],
})
export class UsersModule { }
