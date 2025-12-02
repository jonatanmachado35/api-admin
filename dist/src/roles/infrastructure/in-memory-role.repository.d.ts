import { Role } from '../domain/role.entity';
import { RoleRepository } from '../domain/role.repository';
export declare class InMemoryRoleRepository implements RoleRepository {
    private roles;
    create(role: Role): Promise<Role>;
    findByName(name: string): Promise<Role | null>;
}
