import { Module } from '@nestjs/common';
import { CreateUserUseCase } from './application/create-user.use-case';
import { FindUserUseCase } from './application/find-user.use-case';
import { InMemoryUserRepository } from './infrastructure/in-memory-user.repository';
import { UserRepository } from './domain/user.repository';

import { UsersController } from './presentation/users.controller';

@Module({
  controllers: [UsersController],
  providers: [
    CreateUserUseCase,
    FindUserUseCase,
    {
      provide: UserRepository,
      useClass: InMemoryUserRepository,
    },
  ],
  exports: [CreateUserUseCase, FindUserUseCase, UserRepository],
})
export class UsersModule { }
