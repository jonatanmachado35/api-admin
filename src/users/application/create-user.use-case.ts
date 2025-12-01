import { Injectable } from '@nestjs/common';
import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import * as bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class CreateUserUseCase {
  constructor(private readonly userRepository: UserRepository) { }

  async execute(user: Partial<User>): Promise<User> {
    if (!user.password) {
      throw new Error('Password is required');
    }
    const hashedPassword = await bcrypt.hash(user.password, 10);
    const newUser = new User({
      ...user,
      id: uuidv4(),
      password: hashedPassword,
    });
    return this.userRepository.create(newUser);
  }
}
