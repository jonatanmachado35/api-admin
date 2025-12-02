import { Role } from './role.entity';

export abstract class RoleRepository {
  abstract create(role: Role): Promise<Role>;
  abstract findByName(name: string): Promise<Role | null>;
}
