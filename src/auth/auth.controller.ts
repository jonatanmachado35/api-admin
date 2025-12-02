import {
  Controller,
  Post,
  UseGuards,
  Request,
  Body,
  Get,
} from '@nestjs/common';
import { LocalAuthGuard } from './guards/local-auth.guard';
import { LoginUseCase } from './application/login.use-case';
import { RefreshTokenUseCase } from './application/refresh-token.use-case';
import { RefreshTokenGuard } from './guards/refresh-token.guard';

@Controller('auth')
export class AuthController {
  constructor(
    private loginUseCase: LoginUseCase,
    private refreshTokenUseCase: RefreshTokenUseCase,
  ) { }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.loginUseCase.execute(req.user);
  }

  @UseGuards(RefreshTokenGuard)
  @Get('refresh')
  async refresh(@Request() req) {
    const userId = req.user['sub'];
    const refreshToken = req.user['refreshToken'];
    return this.refreshTokenUseCase.execute(userId, refreshToken);
  }
}
