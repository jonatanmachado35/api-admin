import { RoleRepository } from '../domain/role.repository';
import { Role } from '../domain/role.entity';
export declare class CreateRoleUseCase {
    private readonly roleRepository;
    constructor(roleRepository: RoleRepository);
    execute(name: string): Promise<Role>;
}
