import { Controller, Get, Post, Body, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { RolesGuard } from '../../auth/guards/roles.guard';
import { Roles } from '../../auth/decorators/roles.decorator';
import { FindUserUseCase } from '../application/find-user.use-case';
import { CreateUserUseCase } from '../application/create-user.use-case';
import { CreateUserDto } from './dto/create-user.dto';

@Controller('users')
export class UsersController {
  constructor(
    private readonly findUserUseCase: FindUserUseCase,
    private readonly createUserUseCase: CreateUserUseCase,
  ) { }

  @Post()
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Roles('admin')
  async create(@Body() body: CreateUserDto) {
    const { roleId, ...userData } = body;
    const createdUser = await this.createUserUseCase.execute(userData, roleId);
    const { password, refreshToken, ...result } = createdUser;
    return result;
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req) {
    const user = await this.findUserUseCase.findById(req.user.userId);
    if (!user) {
      throw new NotFoundException('User not found');
    }
    const { password, refreshToken, ...result } = user;
    return result;
  }
}
