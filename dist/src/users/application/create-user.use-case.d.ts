import { User } from '../domain/user.entity';
import { UserRepository } from '../domain/user.repository';
import { RoleRepository } from '../../roles/domain/role.repository';
export declare class CreateUserUseCase {
    private readonly userRepository;
    private readonly roleRepository;
    constructor(userRepository: UserRepository, roleRepository: RoleRepository);
    execute(user: Partial<User>, roleId: string): Promise<User>;
}
