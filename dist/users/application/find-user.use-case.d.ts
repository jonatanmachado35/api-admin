import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
export declare class FindUserUseCase {
    private readonly userRepository;
    constructor(userRepository: UserRepository);
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
}
