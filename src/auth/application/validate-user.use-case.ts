import { Injectable } from '@nestjs/common';
import { FindUserUseCase } from '../../users/application/find-user.use-case';
import * as bcrypt from 'bcrypt';

@Injectable()
export class ValidateUserUseCase {
  constructor(private readonly findUserUseCase: FindUserUseCase) { }

  async execute(email: string, pass: string): Promise<any> {
    const user = await this.findUserUseCase.findByEmail(email);
    if (user && user.password && (await bcrypt.compare(pass, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }
}
