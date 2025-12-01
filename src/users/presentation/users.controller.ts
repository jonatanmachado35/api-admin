import { Controller, Get, UseGuards, Request, NotFoundException } from '@nestjs/common';
import { JwtAuthGuard } from '../../auth/guards/jwt-auth.guard';
import { FindUserUseCase } from '../application/find-user.use-case';

@Controller('users')
export class UsersController {
  constructor(private readonly findUserUseCase: FindUserUseCase) { }

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
