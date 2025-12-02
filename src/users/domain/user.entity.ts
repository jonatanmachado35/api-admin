import { Role } from '../../roles/domain/role.entity';

export class User {
  id: string;
  email: string;
  password?: string;
  refreshToken?: string;
  roles?: Role[];

  constructor(partial: Partial<User>) {
    Object.assign(this, partial);
  }
}
