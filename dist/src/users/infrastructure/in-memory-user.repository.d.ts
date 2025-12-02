import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
export declare class InMemoryUserRepository implements UserRepository {
    private users;
    create(user: User): Promise<User>;
    findByEmail(email: string): Promise<User | null>;
    findById(id: string): Promise<User | null>;
    update(id: string, data: Partial<User>): Promise<void>;
}
