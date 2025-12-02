import { Role } from './role.entity';
export declare abstract class RoleRepository {
    abstract create(role: Role): Promise<Role>;
    abstract findByName(name: string): Promise<Role | null>;
}
