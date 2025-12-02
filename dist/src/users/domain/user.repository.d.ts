import { User } from './user.entity';
export declare abstract class UserRepository {
    abstract create(user: User): Promise<User>;
    abstract findByEmail(email: string): Promise<User | null>;
    abstract findById(id: string): Promise<User | null>;
    abstract update(id: string, user: Partial<User>): Promise<void>;
}
