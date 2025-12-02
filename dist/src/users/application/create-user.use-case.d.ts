import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
export declare class CreateUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    execute(user: Partial<User>): Promise<User>;
}
