import { Controller, Post, Body, UseGuards } from '@nestjs/common';
import { CreateRoleUseCase } from '../application/create-role.use-case';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';

@Controller('roles')
export class RolesController {
  constructor(private readonly createRoleUseCase: CreateRoleUseCase) { }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async create(@Body('name') name: string) {
    return this.createRoleUseCase.execute(name);
  }
}
